/**
 * @swagger
 * /users:
 *   get:
 *     tags:
 *       - users
 *     summary: Retrieves all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags:
 *       - users
 *     summary: Retrieves a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 */
/**
 * @swagger
 * /users:
 *   post:
 *     tags:
 *       - users
 *     summary: Creates a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: John Doe
 *               email: john.doe@example.com
 *     responses:
 *       201:
 *         description: User created successfully
 */
/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags:
 *       - users
 *     summary: Updates a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example:
 *               name: John Smith
 *               email: john.smith@example.com
 *     responses:
 *       200:
 *         description: User updated successfully
 */
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags:
 *       - users
 *     summary: Deletes a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 */
