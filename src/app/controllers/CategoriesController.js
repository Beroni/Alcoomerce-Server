import Category from '../models/Category';

class CategoryController {
  async list(req, res) {
    const { rows, count } = await Category.findAndCountAll({});
    return res.status(200).json({ data: rows, total: count });
  }

  async index(req, res) {
    const { id } = req.params;
    const category = await Category.findOne({
      where: {
        id,
      },
    });

    return res.status(200).json({ data: category, total: 1 });
  }

  async store(req, res) {
    const categoryExists = await Category.findOne({
      where: { name: req.body.name },
    });

    if (categoryExists) {
      return res.status(400).json({ error: 'Category already exists.' });
    }

    const category = await Category.create(req.body);

    return res.status(201).json({ data: category });
  }

  async update(req, res) {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    const newCategory = await category.update(req.body);

    return res.json({ data: newCategory });
  }

  async remove(req, res) {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(401).json({ error: 'Category does not exist' });
    }

    await category.destroy();

    return res.status(200).json({ data: { id } });
  }
}

export default new CategoryController();
