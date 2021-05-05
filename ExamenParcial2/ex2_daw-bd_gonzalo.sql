-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-05-2021 a las 17:53:58
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ex2_daw-bd_gonzalo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `incidentes`
--

CREATE TABLE `incidentes` (
  `idIncidente` int(11) NOT NULL,
  `idTipoIncidente` int(11) NOT NULL,
  `idLugar` int(11) NOT NULL,
  `tiempo` date NOT NULL DEFAULT current_timestamp(),
  `descripcion` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `incidentes`
--

INSERT INTO `incidentes` (`idIncidente`, `idTipoIncidente`, `idLugar`, `tiempo`, `descripcion`) VALUES
(1, 1, 6, '0000-00-00', 'Al estar dilofosando, los ISC y los mecatrónicos se pelearon, causando un corto circuito'),
(2, 3, 4, '0000-00-00', 'System Velociraptor is on the run to finish the exam'),
(3, 7, 2, '0000-00-00', 'It’s a UNIX System, I know this, or that they thought');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lugares`
--

CREATE TABLE `lugares` (
  `idLugar` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `lugares`
--

INSERT INTO `lugares` (`idLugar`, `nombre`, `descripcion`) VALUES
(1, 'Centro turístico', 'Si es tu primer viaje, definitivamente será el mejor de tu vida'),
(2, 'Laboratorios', 'No... simplemente, no'),
(3, 'Restaurante', 'Recomiendo los helados'),
(4, 'Centro operativo', 'al menos hay uno, aun'),
(5, 'Triceratops', 'tres, no dos, no cuatro, tres'),
(6, 'Dilofosaurios', 'no lo digas, dilófoso'),
(7, 'Velociraptors', 'System Velociraptor\'s home'),
(8, 'TRex', 'Mucha sangre'),
(9, 'Planicie de los herbívoros', 'Mucha hierba');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_incidentes`
--

CREATE TABLE `tipo_incidentes` (
  `idTipoIncidente` int(11) NOT NULL,
  `nombre` varchar(100) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish2_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `tipo_incidentes`
--

INSERT INTO `tipo_incidentes` (`idTipoIncidente`, `nombre`, `descripcion`) VALUES
(1, 'Falla eléctrica', 'Siempre culpan a los ISD\'s'),
(2, 'Fuga de herbívoro', 'Llamen a un agrónomo'),
(3, 'Fuga de Velociraptors', 'System Velociraptor is on fire'),
(4, 'Fuga de TRex', 'Bring the SWUGOATS'),
(5, 'Robo de ADN', 'lo bueno que no se robaron el DNA'),
(6, 'Auto descompuesto', 'No otra vez'),
(7, 'Visitantes en zona no autorizada', 'There is always one');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `incidentes`
--
ALTER TABLE `incidentes`
  ADD PRIMARY KEY (`idTipoIncidente`,`idLugar`,`idIncidente`),
  ADD KEY `cf_lugar` (`idLugar`),
  ADD KEY `cf_TipoIncidente` (`idTipoIncidente`) USING BTREE;

--
-- Indices de la tabla `lugares`
--
ALTER TABLE `lugares`
  ADD PRIMARY KEY (`idLugar`);

--
-- Indices de la tabla `tipo_incidentes`
--
ALTER TABLE `tipo_incidentes`
  ADD PRIMARY KEY (`idTipoIncidente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `lugares`
--
ALTER TABLE `lugares`
  MODIFY `idLugar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `tipo_incidentes`
--
ALTER TABLE `tipo_incidentes`
  MODIFY `idTipoIncidente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `incidentes`
--
ALTER TABLE `incidentes`
  ADD CONSTRAINT `cf_lugar` FOREIGN KEY (`idLugar`) REFERENCES `lugares` (`idLugar`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cf_tipoIncidente` FOREIGN KEY (`idTipoIncidente`) REFERENCES `tipo_incidentes` (`idTipoIncidente`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
