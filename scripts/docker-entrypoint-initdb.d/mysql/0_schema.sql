CREATE TABLE `employees_tb` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `status` varchar(8)
);

ALTER TABLE `employees_tb` ADD PRIMARY KEY (`id`);

ALTER TABLE `employees_tb` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

INSERT INTO `employees_tb` (`name`, `email`, `address`, `phone`, `status`) VALUES ('Joe Schmoe', 'JoeSchmoe@mail.com', '123 Baker St. Atlantis, HI 22123', '1231231234', 'Active');
INSERT INTO `employees_tb` (`name`, `email`, `address`, `phone`, `status`) VALUES ('Joeanne Schmoe', 'JoeanneSchmoe@mail.com', '123 Baker St. Atlantis, HI 22123', '1231231234', 'Inactive');