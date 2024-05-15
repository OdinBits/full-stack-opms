import { NextApiRequest, NextApiResponse } from "next";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";

type Data = {
    token: string;
};

const jwtExpirySeconds = 300;

export function generateJWT(
    req: NextApiRequest,
    res: NextApiResponse<Data>
): void {
    try {
        const {
            username,
            connectedappclientid,
            connectedappsecret,
            connectedappsecretid,
        } = req.body;

        if (
            !username ||
            !connectedappclientid ||
            !connectedappsecret ||
            !connectedappsecretid
        ) {
            res.status(401).end();
            return;
        }

        const payload = {
            jti: randomBytes(64).toString("hex"),
            iss: connectedappclientid || "1555fb46-1866-437b-9792-c666ed6bde77",
            aud: "tableau",
            sub: username || "nishant.chavan@techprimelab.com",
            scope: ["tableau:views:embed"],
        };

        const token = generateToken(payload, connectedappsecret, connectedappsecretid);

        res.status(200).json({ token });
    } catch (error) {
        console.error("Error generating JWT:", error);
        res.status(500).end();
    }
}

function generateToken(payload: any, secret: string, kid: string): string {
    const options: jwt.SignOptions = {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
        header: {
            kid: kid || "655c3c64-de4e-4882-9c57-4432a0800856",
            iss: payload.iss || "1555fb46-1866-437b-9792-c666ed6bde77",
        } as unknown as jwt.JwtHeader, // Type assertion here
    };

    return jwt.sign(payload, secret, options);
}
