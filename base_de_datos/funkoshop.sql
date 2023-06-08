-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2023 a las 00:45:31
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `funkoshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `product_categories_id` int(11) DEFAULT NULL,
  `product_subcategories_id` int(11) DEFAULT NULL,
  `price` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `product_categories_id`, `product_subcategories_id`, `price`) VALUES
(1, 'Albert Einstein', ' funko de Einstein', 7, 1, '4500.00'),
(2, 'Batman', '', 2, 2, '5000.00'),
(3, 'C-3PO', '', 1, 3, '6000.00'),
(4, 'Carol', '', 3, 1, '4800.00'),
(5, 'Chewbacca', '', 1, 2, '7000.00'),
(6, 'Daneyrys Targayen', '', 3, 3, '5500.00'),
(7, 'Darth Vader', '', 1, 1, '6800.00'),
(8, 'Dobby', '', 6, 2, '5600.00'),
(9, 'Doctor Strange', '', 4, 3, '6800.00'),
(10, 'Flash', '', 3, 1, '5200.00'),
(11, 'Freddie Mercury', '', 9, 2, '7000.00'),
(12, 'Freddy Krueger', '', 6, 3, '4500.00'),
(13, 'Gollum', '', 6, 1, '3400.00'),
(14, 'Baby Yoda', '', 1, 2, '6000.00'),
(15, 'Harley Quinn', '', 2, 3, '6000.00'),
(16, 'Iron Man', '', 4, 1, '6000.00'),
(17, 'Jason', '', 6, 2, '6000.00'),
(18, 'John Wick', '', 6, 3, '6000.00'),
(19, 'Leia Morgana', '', 1, 1, '6000.00'),
(20, 'Mr. Bean', '', 6, 2, '6000.00'),
(21, 'Obi Wan Kenobi', '', 1, 3, '6000.00'),
(22, 'Eleven', '', 3, 1, '6000.00'),
(23, 'Robocop', '', 6, 2, '6000.00'),
(24, 'Spiderman', '', 4, 3, '6000.00'),
(25, 'Thor', '', 4, 1, '6000.00'),
(26, 'Walter White', '', 3, 2, '6000.00'),
(28, 'Axl Rose ', 'Cantante de Guns n\' Roses', 9, 1, '17000.00'),
(29, 'Scaloni', 'Dt Campeon 2022', 8, 2, '16000.00'),
(30, 'Capitán América', '', 4, 3, '17000.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_categories`
--

CREATE TABLE `products_categories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_categories`
--

INSERT INTO `products_categories` (`id`, `name`) VALUES
(1, 'STAR WARS'),
(2, 'DC'),
(3, 'SERIES'),
(4, 'MARVEL'),
(5, 'HARRY POTTER'),
(6, 'PELICULAS'),
(7, 'FAMOSOS'),
(8, 'DEPORTES'),
(9, 'MUSICA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_images`
--

CREATE TABLE `products_images` (
  `id` int(11) NOT NULL,
  `url` text NOT NULL,
  `isPrimary` tinyint(1) DEFAULT NULL,
  `products_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_images`
--

INSERT INTO `products_images` (`id`, `url`, `isPrimary`, `products_id`) VALUES
(1, 'Albert.png', 1, 1),
(2, 'Batman.png', 1, 2),
(3, 'C-3PO.png', 1, 3),
(4, 'carol.png', 1, 4),
(5, 'Chewbacca.png', 1, 5),
(6, 'daneyrys_targayen.png', 1, 6),
(7, 'Darth-Vader.png', 1, 7),
(8, 'dobby.png', 1, 8),
(9, 'Doctor-Strange.png', 1, 9),
(10, 'Flash.png', 1, 10),
(11, 'Freddie-Mercury.png', 1, 11),
(12, 'freddy_krueger.png', 1, 12),
(13, 'gollum.png', 1, 13),
(14, 'Grogu.png', 1, 14),
(15, 'Harley-Quinn.png', 1, 15),
(16, 'Iron-Man.png', 1, 16),
(17, 'Jason.png', 1, 17),
(18, 'johnwick.png', 1, 18),
(19, 'Leia.png', 1, 19),
(20, 'mr.been.png', 1, 20),
(21, 'Obi-Wan.png', 1, 21),
(22, 'once.png', 1, 22),
(23, 'robocop.png', 1, 23),
(24, 'Spider-man.png', 1, 24),
(25, 'Thor.png', 1, 25),
(26, 'walte_white.png', 1, 26),
(28, 'axlrose.png', 1, 28),
(29, 'scaloni.png', 1, 29),
(30, 'funko_capitan_america.png', 1, 30);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_subcategories`
--

CREATE TABLE `products_subcategories` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `products_subcategories`
--

INSERT INTO `products_subcategories` (`id`, `name`) VALUES
(1, 'in-sale'),
(2, 'visited'),
(3, 'none');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230422211101-create_products_table.js'),
('20230422211111-create_users_table.js'),
('20230422211130-create_users_types_table.js'),
('20230422211155-create_products_subcategories_table.js'),
('20230422211217-create_products_images_table.js'),
('20230424194915-create_products_categories_table.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` text NOT NULL,
  `LastName` text NOT NULL,
  `adress` text NOT NULL,
  `city` text NOT NULL,
  `zipCode` int(11) NOT NULL,
  `cell` int(11) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `avatar` text NOT NULL,
  `types_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `firstName`, `LastName`, `adress`, `city`, `zipCode`, `cell`, `email`, `password`, `avatar`, `types_id`) VALUES
(1, 'Rodolfo', 'Lopez', '', '', 0, 0, 'rodolfo.lopez@gmail.com', '12345678', 'imagen.jpg', 1),
(2, 'Sofia', 'Garcia', '', '', 0, 0, 'sofia.garcia@gmail.com', '87654321', 'imagen.jpg', 2),
(3, 'Maria', 'Rodriguez', '', '', 0, 0, 'maria.rodriguez@gmail.com', 'hola1234', 'imagen.jpg', 2),
(4, 'Juan', 'Cruz', '', '', 0, 0, 'juan.cruz@gmail.com', '1234hola', 'imagen.jpg', 2),
(5, 'Fernando', 'Gomez', '', '', 0, 0, 'fernando.gomez@gmail.com', 'chau1234', 'imagen.jpg', 2),
(6, 'Rodolfo', 'Lopez', '', '', 0, 0, 'rodolfo.lopez@gmail.com', '12345678', 'imagen.jpg', 1),
(7, 'Sofia', 'Garcia', '', '', 0, 0, 'sofia.garcia@gmail.com', '87654321', 'imagen.jpg', 2),
(8, 'Maria', 'Rodriguez', '', '', 0, 0, 'maria.rodriguez@gmail.com', 'hola1234', 'imagen.jpg', 2),
(9, 'Juan', 'Cruz', '', '', 0, 0, 'juan.cruz@gmail.com', '1234hola', 'imagen.jpg', 2),
(10, 'Fernando', 'Gomez', '', '', 0, 0, 'fernando.gomez@gmail.com', 'chau1234', 'imagen.jpg', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_types`
--

CREATE TABLE `users_types` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users_types`
--

INSERT INTO `users_types` (`id`, `name`) VALUES
(1, 'ADMIN'),
(2, 'USER'),
(3, 'ADMIN'),
(4, 'USER');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_categories_id` (`product_categories_id`),
  ADD KEY `product_subcategories_id` (`product_subcategories_id`);

--
-- Indices de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products_images`
--
ALTER TABLE `products_images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_id` (`products_id`);

--
-- Indices de la tabla `products_subcategories`
--
ALTER TABLE `products_subcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `types_id` (`types_id`);

--
-- Indices de la tabla `users_types`
--
ALTER TABLE `users_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `products_categories`
--
ALTER TABLE `products_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `products_images`
--
ALTER TABLE `products_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT de la tabla `products_subcategories`
--
ALTER TABLE `products_subcategories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users_types`
--
ALTER TABLE `users_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`product_categories_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`product_subcategories_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products_images`
--
ALTER TABLE `products_images`
  ADD CONSTRAINT `products_images_ibfk_1` FOREIGN KEY (`products_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`types_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
