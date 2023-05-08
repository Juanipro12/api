import mongoose from 'mongoose';
// usar docker inspect <nombre-del-contenedor-mongo> | grep "IPAddress"

export async function connectiondb(){
    try {
        const db = await mongoose.connect('mongodb://172.26.0.2:27017/ejex')
        console.log('Connected to database',db.connection.name)
    } catch (error) {
        console.error('Database connection error:', error)
    }
}


