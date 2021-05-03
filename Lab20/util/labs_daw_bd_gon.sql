-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-04-2021 a las 20:06:05
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
-- Base de datos: `labs_daw_bd_gon`
--
CREATE DATABASE IF NOT EXISTS `labs_daw_bd_gon` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish2_ci;
USE `labs_daw_bd_gon`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `idArticulo` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish2_ci DEFAULT 'Este producto es fresco y bueno para tu salud',
  `dirImagen` varchar(150) COLLATE utf8_spanish2_ci DEFAULT './IMG/naranja.png',
  `precio` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` VALUES(1, 'Naranja', 'Las naranjas brindan un aporte importante de vitamina C. <br><br> Promueve niveles saludables de azúcar en sangre.<br><br>$12.00/k', './IMG/naranja.png', 12);
INSERT INTO `articulos` VALUES(2, 'Sandia', 'La sandía es una planta anual y la mayoría de las variedades se pueden cosechar 80-100 días después de la siembra. <br><br> Se cree que los egeipcios fueron los primero en cultivarla a gran escala.<br><br>$35.00/k', './IMG/sandia.jpg', 35);
INSERT INTO `articulos` VALUES(3, 'Jicama', 'Es una legumbre, tambien llamada tubérculo.<br><br> Las vainas son tóxicas, pero la raiz es 100% comestible.<br><br> Hay registros de su consumo de las culturas tolteca, mexica, maya y zapoteca.<br><br> $23.00/k', './IMG/jicama.png', 23);
INSERT INTO `articulos` VALUES(4, 'Jitomate', 'Este producto es fresco y bueno para tu salud', './IMG/jitomate.jpg', 18);
INSERT INTO `articulos` VALUES(5, 'Chicharo', 'Este producto es fresco y bueno para tu salud', './IMG/chicharo.jpg', 9);
INSERT INTO `articulos` VALUES(6, 'Espinaca', 'Este producto es fresco y bueno para tu salud', './IMG/espinaca.jpg', 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `userName` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `userPssw` varchar(200) COLLATE utf8_spanish2_ci NOT NULL,
  `fechaReg` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` VALUES(1, 'Admin', '1234', '2021-04-24');
INSERT INTO `usuarios` VALUES(2, 'User1', 'noLeasEsto', '2021-04-24');
INSERT INTO `usuarios` VALUES(3, 'user2', 'holaholahola', '2021-04-24');
INSERT INTO `usuarios` VALUES(4, 'hola', 'A9=aaaaa', '2021-04-24');
INSERT INTO `usuarios` VALUES(5, 'GonzaloAGM', 'Aa=123456', '2021-04-25');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`idArticulo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articulos`
--
ALTER TABLE `articulos`
  MODIFY `idArticulo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
