import jwt from 'jsonwebtoken'

export const verificarToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send("No se proporcionó un token");
    }
  
    try {
      const usuario = jwt.verify(token, "tu_secreto_secreto");
      req.usuario = usuario;
      next();
    } catch (error) {
      res.status(401).send("Token no válido");
    }
  }