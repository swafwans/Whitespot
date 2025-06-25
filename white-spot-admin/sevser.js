const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // 'public' ഫോൾഡറിൽ നിന്നുള്ള ഫയലുകൾ സേവ് ചെയ്യുക

let products = [
  { id: 1, name: 'Sample Product', description: 'Initial description', price: 999.99, stock: 100, category: 'electronics', image: '' }
];
let stats = {
  totalProducts: 1,
  totalOrders: 50,
  todayRevenue: '₹5000',
  activeUsers: 200
};

// API എൻഡ്‌പോയിന്റുകൾ
app.get('/api/stats', (req, res) => res.json(stats));
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.json(product || {});
});
app.put('/api/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body, id: parseInt(req.params.id) };
    res.json(products[index]);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));