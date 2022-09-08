gitCREATE DATABASE apiimplementacion;

USE apiimplementacion;

CREATE TABLE IF NOT EXISTS Ingredientes (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreIngrediente VARCHAR(20) NOT NULL,
    cantidadDisponible INT UNSIGNED NOT NULL,
    tipo_Ingrediente VARCHAR(20) NOT NULL,
    precioIngrediente INT UNSIGNED NOT NULL);

CREATE TABLE IF NOT EXISTS Platos (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre_plato VARCHAR(20) NOT NULL,
    precio INT UNSIGNED NOT NULL,
    descripcion VARCHAR(45) NOT NULL);

CREATE TABLE IF NOT EXISTS Usuarios (
	id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(40) NOT NULL,
    telefono INT UNSIGNED NOT NULL,
	email VARCHAR(70) NOT NULL,
    direccion VARCHAR(70) NOT NULL);

    
CREATE TABLE IF NOT EXISTS Domiciliarios (
	id INT UNSIGNED NOT NULL PRIMARY KEY,
    nombre_Domiciliario VARCHAR(40) NOT NULL,
    disponible BOOLEAN NOT NULL,
    activo BOOLEAN NOT NULL);
    
CREATE TABLE IF NOT EXISTS Pedidos (
	id_Pedidos INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
	id_Usuarios INT UNSIGNED NOT NULL,
	precioBruto INT UNSIGNED NOT NULL,
	fecha DATE NOT NULL,
	finalizado BOOLEAN NOT NULL,
	CONSTRAINT `fk_id_Usuarios`
	FOREIGN KEY (`id_Usuarios`)
	REFERENCES `apiimplementacion`.`usuarios` (`id_Usuarios`) 
	ON DELETE CASCADE
	ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS Domicilios (
	id_Domicilios INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_Pedidos INT UNSIGNED NOT NULL,
    id_Domiciliarios INT UNSIGNED NOT NULL,
    direccion VARCHAR(70) NOT NULL,
    telefono INT NOT NULL,
	CONSTRAINT `fk_id_Pedidos`
    FOREIGN KEY (`id_Pedidos`)
    REFERENCES `apiimplementacion`.`pedidos` (`id_Pedidos`) 
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
	CONSTRAINT `fk_id_Domiciliarios`
    FOREIGN KEY (`id_Domiciliarios`)
    REFERENCES `apiimplementacion`.`Domiciliarios` (`id_Domiciliarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS Ingredientes_Platos (
	id_Ingredientes INT UNSIGNED NOT NULL,
    id_Platos INT UNSIGNED NOT NULL,
    cantidad_Ingrediente INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_Ingredientes`, `id_Platos`),
	CONSTRAINT `fk_id_Ingredientes`
    FOREIGN KEY (`id_Ingredientes`)
    REFERENCES `apiimplementacion`.`ingredientes` (`id_Ingredientes`) 
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_Platos`
    FOREIGN KEY (`id_Platos`)
    REFERENCES `apiimplementacion`.`platos` (`id_Platos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
CREATE TABLE IF NOT EXISTS Platos_Pedidos (
	id_Platos INT UNSIGNED NOT NULL,
    id_Pedidos INT UNSIGNED NOT NULL,
    cantidad_Platos INT UNSIGNED NOT NULL,
    PRIMARY KEY (`id_Platos`, `id_Pedidos`),
	CONSTRAINT `fk_id_Platos2`
    FOREIGN KEY (`id_Platos`)
    REFERENCES `apiimplementacion`.`platos` (`id_Platos`) 
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_id_Pedidos2`
    FOREIGN KEY (`id_Pedidos`)
    REFERENCES `apiimplementacion`.`pedidos` (`id_Pedidos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);