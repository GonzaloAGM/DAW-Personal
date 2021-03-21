const perros = [
    {nombre: 'Helga', imagen: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/Purina%C2%AE%20caracteristicas%20de%20pastor%20aleman.jpg'}, 
    {nombre: 'Canela', imagen: 'https://notasdemascotas.com/wp-content/uploads/2017/02/Golden-retriever-razas-de-perros.jpg'}, 
    {nombre: 'Alacran', imagen: 'https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/noticias/los-problemas-de-salud-de-los-bulldogs-franceses-otitis-diarreas-y-conjuntivitis/6171438-1-esl-MX/Los-problemas-de-salud-de-los-bulldogs-franceses-otitis-diarreas-y-conjuntivitis.jpg'}, 
    {nombre: 'Fiona', imagen: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/Purina%C2%AE%20caracteristicas%20de%20los%20pugs.jpg'}, 
    {nombre: 'Petunia', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFrbXtyDuS179ZckqfVp8Z06V2RxW5ShgOw&usqp=CAU'}, 
    {nombre: 'Qui-Gon-Jin', imagen: 'https://i.pinimg.com/originals/dd/98/c6/dd98c628c16e67195bcc6ef1ad3aae89.jpg'}];

const requestHandler = (request, response) => {

        console.log(request.url);
      
        if(request.url === '/') {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body>');
          response.write('<h1>Nuestros perros</h1>');
          response.write('<ul>');
          for(let perro of perros) {
            response.write('<li><a href="/' + perro.nombre + '">' + perro.nombre + '</a></li>');
          }
          response.write('</ul>');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/Helga') {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[0].nombre+'</title></head><body>');
          response.write('<h1>'+perros[0].nombre+'</h1>');
          response.write('<img alt="Imagen de Pastor Alemán" src="'+perros[0].imagen+'">');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/Canela') {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[1].nombre+'</title></head><body>');
          response.write('<h1>'+perros[1].nombre+'</h1>');
          response.write('<img alt="Imagen de Pastor Alemán" src="'+perros[1].imagen+'">');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/Alacran') {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[2].nombre+'</title></head><body>');
          response.write('<h1>'+perros[2].nombre+'</h1>');
          response.write('<img alt="Imagen de Pastor Alemán" src="'+perros[2].imagen+'">');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/Fiona') {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[3].nombre+'</title></head><body>');
          response.write('<h1>'+perros[3].nombre+'</h1>');
          response.write('<img alt="Imagen de Pastor Alemán" src="'+perros[3].imagen+'">');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/Petunia') {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[4].nombre+'</title></head><body>');
          response.write('<h1>'+perros[4].nombre+'</h1>');
          response.write('<img alt="Imagen de Pastor Alemán" src="'+perros[4].imagen+'">');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/Qui-Gon-Jin') {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>'+perros[5].nombre+'</title></head><body>');
          response.write('<h1>'+perros[5].nombre+'</h1>');
          response.write('<img alt="Imagen de Pastor Alemán" src="'+perros[5].imagen+'">');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/adoptar' && request.method === "GET") {
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Adopta un perro</title></head><body>');
          response.write('<h1>Adopta un perro</h1>');
          response.write('<form action="/adoptar" method="POST">');
          response.write('Nombre: <input type="text" name="nombre"><br>');
          response.write('Imagen: <input type="text" name="imagen"><br>');
          response.write('<input type="submit" name="enviar" value="Adoptar"><br>');
          response.write('</form>');
          response.write('</body></html>');
          response.end();
        } else if (request.url === '/adoptar' && request.method === "POST") {
          const datos = [];
      
          request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
          });
      
          return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nombre_nuevo_perro = datos_completos.split('=')[1].split('&')[0];
            const imagen_nuevo_perro = datos_completos.split('=')[2].split('&')[0];
            perros.push({nombre: nombre_nuevo_perro, imagen: imagen_nuevo_perro});
            console.log(perros);
            response.statusCode = 302;
            response.setHeader('Location', '/');
            response.end();
          });
        } else if (request.url === '/admin') {
          response.statusCode = 403;
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Recurso prohibido</title></head><body>');
          response.write('<h1>Recurso prohibido</h1>');
          response.write('</body></html>');
          response.end();
        } else {
          response.statusCode = 404;
          response.setHeader('Content-Type', 'text/html');
          response.write('<html>');
          response.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Página no disponible</title></head><body>');
          response.write('<h1>Página no disponible</h1>');
          response.write('</body></html>');
          response.end();
        }
      
    };

    module.exports = requestHandler;