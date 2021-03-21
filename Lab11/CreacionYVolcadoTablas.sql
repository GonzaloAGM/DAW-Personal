CREATE TABLE Materiales
(
  Clave numeric(5),
  Descripcion varchar(50),
  Costo numeric(8,2)
)

CREATE TABLE Proveedores
(
	RFC CHAR(13),
	RazonSocial VARCHAR(50)
)

CREATE TABLE Proyectos
(
	Numero NUMERIC (5),
	Denominacion VARCHAR(50)
)

CREATE TABLE Entregan
(
	Clave numeric(5),
	RFC CHAR(13),
	Numero NUMERIC (5),
	Fecha DATETIME,
	Cantidad NUMERIC (8,2)
)

BULK INSERT a1702956.a1702956.[Materiales]
FROM 'e:\wwwroot\rcortese\materiales.csv'
WITH
   (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

BULK INSERT a1702956.a1702956.[Proveedores]
FROM 'e:\wwwroot\rcortese\proveedores.csv'
WITH
   (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

BULK INSERT a1702956.a1702956.[Proyectos]
FROM 'e:\wwwroot\rcortese\proyectos.csv'
WITH
   (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

BULK INSERT a1702956.a1702956.[Entregan]
FROM 'e:\wwwroot\rcortese\entregan.csv'
WITH
   (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

 drop table Entregan

SET DATEFORMAT dmy

sp_help Entregan

SELECT * FROM Proyectos
