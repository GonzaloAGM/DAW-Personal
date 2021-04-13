---------------------Crear tablas--------------------------

CREATE TABLE `a01702956_prueba`.`Materiales` 
(
    `Clave` INT NOT NULL,
    `Descripcion` CHAR(50), 
    `Costo` INT NULL,
    PRIMARY KEY (`Clave`) 
)
ENGINE = InnoDB;


CREATE TABLE `a01702956_prueba`.`Proveedores` 
(
    `RFC` CHAR(13) NOT NULL,
    `RazonSocial` CHAR(50),
    PRIMARY KEY (`RFC`) 
)
ENGINE = InnoDB;

CREATE TABLE `a01702956_prueba`.`Proyectos` 
(
    `Numero` INT NOT NULL,
    `Denominacion` CHAR(50),
    PRIMARY KEY (`Numero`) 
)
ENGINE = InnoDB;

CREATE TABLE `a01702956_prueba`.`Entregan` 
( 
    `Clave` INT NOT NULL, 
    `RFC` VARCHAR(13) NOT NULL, 
    `Numero` INT NOT NULL, 
    `fecha` DATE NOT NULL, 
    `Cantidad` INT NULL, 
    PRIMARY KEY (`Clave`,`RFC`,`Numero`,`fecha`)
)
ENGINE = InnoDB;

ALTER TABLE `Entregan` 
ADD CONSTRAINT `cfEntregan_Clave_Materiales` 
FOREIGN KEY (`Clave`) 
REFERENCES `Materiales`(`Clave`) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE `Entregan` 
ADD CONSTRAINT `cfEntregan_RFC_Proveedores` 
FOREIGN KEY (`RFC`) 
REFERENCES `Proveedores`(`RFC`) 
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE `Entregan` 
ADD CONSTRAINT `cfEntregan_Numero_Proyectos` 
FOREIGN KEY (`Numero`) 
REFERENCES `Proyectos`(`Numero`) 
ON DELETE CASCADE 
ON UPDATE CASCADE;