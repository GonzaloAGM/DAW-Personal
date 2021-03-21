Para iniciar el servidor en node.js, ingresar el siguiente comando:

-------------node Lab9/initLab9.js

Esto ya despliega todo archivo CSS con la funcionalidad empleada en otros javascripts. Esto se 
lográ con la aportación en el siguiente foro:
https://stackoverflow.com/questions/24582338/how-can-i-include-css-files-using-node-express-and-ejs

En internet explorer funciona correctamente. En Chrome puede tener 
problemas dependiendo de las extensiones que uno tenga instaladas.
Este error se reporta en la consola como:

"Unchecked runtime.lastError:Could not establish connection" sobre \localhost:1

Esto se puede arreglar deshabilitando las extensiones o simplemente 
cambiando de navegador. 

Esto solo ha sido probado en Google Chrome y Microsoft Edge. Se resolvió con la solución encontrada en 
https://stackoverflow.com/questions/54619817/how-to-fix-unchecked-runtime-lasterror-could-not-establish-connection-receivi


Nota adicional: con la siguiente linea se resuelve el error de favicon

-------------<link rel="icon" href="data:,">s

Solución encontrada en: https://github.com/gridsome/gridsome/issues/711