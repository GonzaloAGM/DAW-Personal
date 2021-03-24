-----------------------------------------------------------------------------
------------------------------------ Ejercicio 1 ----------------------------
-----------------------------------------------------------------------------

----------------------------------- Borrar tablas ---------------------------

DROP TABLE Entregan
DROP TABLE Materiales
DROP TABLE Proyectos
DROP TABLE Proveedores

----------------------------------- Crear Tablas ----------------------------

IF EXISTS(
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Materiales'
)

CREATE TABLE Materiales
(
  Clave numeric(5) not null,
  Descripcion varchar(50),
  Costo numeric (8,2)
)

IF EXISTS (
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Proveedores'
)

CREATE TABLE Proveedores
(
  RFC char(13) not null,
  RazonSocial varchar(50)
)

IF EXISTS (
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Proyectos'
)

CREATE TABLE Proyectos
(
  Numero numeric(5) not null,
  Denominacion varchar(50)
)

IF EXISTS (
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Entregan'
)

CREATE TABLE Entregan
(
  Clave numeric(5) not null,
  RFC char(13) not null,
  Numero numeric(5) not null,
  Fecha DateTime not null,
  Cantidad numeric (8,2)
)

--------------- Cargar datos de las tablas desde la base de datos -----------------

BULK INSERT a1702956.a1702956.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

BULK INSERT a1702956.a1702956.[Proyectos]
  FROM 'e:\wwwroot\rcortese\Proyectos.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

BULK INSERT a1702956.a1702956.[Proveedores]
  FROM 'e:\wwwroot\rcortese\Proveedores.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )

SET DATEFORMAT dmy -- especificar formato de la fecha

BULK INSERT a1702956.a1702956.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
     CODEPAGE = 'ACP',
     FIELDTERMINATOR = ',',
     ROWTERMINATOR = '\n'
   )


-----------------------------------------------------------------------------
------------------------------------ Ejercicio 2 ----------------------------
-----------------------------------------------------------------------------

----------Revisar inconsistencias sin primary key----------------------------

INSERT INTO Materiales values(1000, 'xxx', 1000)

--Hay una inconsistencia, pues hay una duplicación de registros con respecto a 
--la clave, es decir, hay dos materiales con la misma clave. Esto porque no se
--ha declarado una primary key

Delete from Materiales where Clave = 1000 and Costo = 1000

----------Revisar inconsistencias con primary key----------------------------

ALTER TABLE Materiales add constraint llaveMateriales PRIMARY KEY (Clave)

INSERT INTO Materiales values(1000, 'xxx', 1000)

--Marcó un error al intentar hacer un nuevo registro

sp_helpconstraint Materiales

--Devuelve información acerca de los constrains que existen en la tabla de materiales

ALTER TABLE Proveedores add constraint RFCProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos add constraint numeroProyecto PRIMARY KEY (Numero)

ALTER TABLE Entregan add constraint llaveRFCNumeroFechaEntregan PRIMARY KEY (Clave, RFC, Numero, Fecha)

--ALTER TABLE tableName drop constraint ConstraintName

-----------------------------------------------------------------------------
------------------------------------ Ejercicio 3 ----------------------------
-----------------------------------------------------------------------------

------------- Desplegar información contenida en las tablas -----------------

SELECT * from Materiales;
SELECT * from Proveedores;
SELECT * from Proyectos;
SELECT * from Entregan;

------------ Validación de inserción sin llave foranea ----------------------

INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0);

--Los valores de Clave, RFC y número no concuerdan con el formato establecido, 
--ni existen en las tablas de Proovedores, proyectos o entregan

Delete from Entregan where Clave = 0

------------------------ Agregar llave foranea ------------------------------

ALTER TABLE Entregan add constraint cfentreganclaveMat
  foreign key (clave) references Materiales(clave);

INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0);

--El mensaje que el sistema devuelve es el siguiente:
--The INSERT statement conflicted with the FOREIGN KEY constraint "cfentreganclave". 
--The conflict occurred in database "a1702956", table "a1702956.Materiales", column 'Clave'.
--Y significa que el nuevo registro no respeta los parámetros de clave de la tabla de Materiales

ALTER TABLE entregan add constraint cfentreganRFCProv
  foreign key (RFC) references proveedores(RFC);
ALTER TABLE Entregan add constraint cfentreganNumProy
  foreign key (Numero) references Proyectos(Numero);

--sp_helpconstraint tableName


-----------------------------------------------------------------------------
------------------------------------ Ejercicio 4 ----------------------------
-----------------------------------------------------------------------------

INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);

--Le esta dando la fecha en el que se realiza el registro pero no, no tiene 
--sentido el valor de 0 en el campo de cantidad

Delete from Entregan where Cantidad = 0

ALTER TABLE entregan add constraint cantidad check (cantidad > 0);

INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0);

--El mensaje que el sistema devuelve es el siguiente:
--The INSERT statement conflicted with the CHECK constraint "cantidad". The conflict occurred 
--in database "a1702956", table "a1702956.Entregan", column 'Cantidad'.
--Y significa que la restricción esta funcionando y revisa cada ves que se realiza un nuevo 
--registro que la cantida sea mayor a cero.

--sp_helpconstraint Materiales
--sp_helpconstraint Materiales
--sp_helpconstraint Materiales
--sp_helpconstraint Materiales

-----------------------------------------------------------------------------
--------------------------- Integridad referecnial --------------------------
-----------------------------------------------------------------------------

--explica el concepto de integridad referencial