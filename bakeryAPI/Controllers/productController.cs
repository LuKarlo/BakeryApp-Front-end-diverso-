using Microsoft.AspNetCore.Mvc;
using bakeryBE.Models;
using bakeryBE.Models.Validation;
using Microsoft.EntityFrameworkCore;
using System;

namespace bakeryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly BakeryContext _context;

        public ProductController(BakeryContext context)
        {
            _context = context;
        }

<<<<<<< HEAD
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var products = await _context.Prodottis.ToListAsync();
            return Ok(products);
        }

        [HttpGet("id/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            if (id <= 0) return BadRequest("Invalid ID.");

            var prod = await _context.Prodottis.FindAsync(id);
            return prod == null ? NotFound($"Product with ID {id} not found.") : Ok(prod);
        }

        [HttpGet("name/{name}")]
        public async Task<IActionResult> GetByName(string name)
        {
            if (string.IsNullOrWhiteSpace(name)) return BadRequest("Invalid name.");

            var prod = await _context.Prodottis.FirstOrDefaultAsync(p => p.ProdName == name);
            return prod == null ? NotFound("Product not found.") : Ok(prod);
        }

        [HttpGet("cat/{cat}")]
        public async Task<IActionResult> GetByCategory(string cat)
        {
            if (string.IsNullOrWhiteSpace(cat)) return BadRequest("Invalid category name.");

            var prod = await _context.Prodottis.Where(p => EF.Functions.Like(p.Prodesc, cat)).ToListAsync();
            return prod.Count == 0 ? NotFound("No products found for the given category.") : Ok(prod);
        }

        [HttpPost]
        public async Task<IActionResult> AddProd([FromBody] Prodotti prod)
        {
            if (prod == null || !ModelState.IsValid) return BadRequest("Invalid product data.");
=======
        // GET: api/product
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _context.Prodottis.ToListAsync();
            return Ok(users);
        }

        // GET api/product/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid ID");
            }

            var prod = await _context.Prodottis.FindAsync(id);

            if (prod == null)
            {
                return NotFound();
            }

            return Ok(prod);
        }

        // POST api/product
        [HttpPost]
        public async Task<IActionResult> AddProd([FromBody] Prodotti prod)
        {
            if (prod == null)
            {
                return BadRequest("Prod data is null.");
            }
>>>>>>> af914d213f37776eab735db7a6d45753e8bd00a6

            _context.Prodottis.Add(prod);
            await _context.SaveChangesAsync();

<<<<<<< HEAD
            return CreatedAtAction(nameof(GetById), new { id = prod.Idprodotto }, prod);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody] Prodotti value)
        {
            if (value == null || !ModelState.IsValid) return BadRequest("Invalid product data.");

            var prod = await _context.Prodottis.FindAsync(id);
            if (prod == null) return NotFound($"Product with ID {id} not found.");

            if (!string.IsNullOrEmpty(value.ProdName)) prod.ProdName = value.ProdName;

            _context.Prodottis.Update(prod);
            await _context.SaveChangesAsync();

            return Ok($"Product {prod.ProdName} updated.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id, [FromHeader(Name = "Authorization")] string token)
        {
            if (id <= 0) return BadRequest("Invalid ID.");
            if (string.IsNullOrWhiteSpace(token) || token != "valore_segreto") return Unauthorized("Invalid or missing token.");

            var prod = await _context.Prodottis.FindAsync(id);
            if (prod == null) return NotFound($"Product with ID {id} not found.");
=======
            return Ok($"Product created with ID {prod.Idprodotto}");
        }

        // PUT api/product/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] Prodotti value)
        {
            if (value == null)
            {
                return BadRequest("Invalid data.");
            }

            var user = await _context.Prodottis.FindAsync(id);

            if (user == null)
            {
                return NotFound($"User with ID {id} not found.");
            }

            if (!string.IsNullOrEmpty(value.ProdName)) user.ProdName = value.ProdName;

            _context.Prodottis.Update(user);
            await _context.SaveChangesAsync();

            return Ok($"Prodotto {user.ProdName} updated.");
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id, [FromBody] Verifica? token)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid ID.");
            }

            var prod = await _context.Prodottis.FindAsync(id);

            if (prod == null)
            {
                return NotFound($"User with ID {id} not found.");
            }
            if (token == null || string.IsNullOrWhiteSpace(token.auth))
            {
                return BadRequest("Authorization token required.");
            }

            // Simula la validazione del token
            if (token.auth != "valore_segreto") // Cambia con la tua logica
            {
                return Unauthorized("Invalid token.");
            }
>>>>>>> af914d213f37776eab735db7a6d45753e8bd00a6

            _context.Prodottis.Remove(prod);
            await _context.SaveChangesAsync();

<<<<<<< HEAD
            return Ok($"Product with ID {id} deleted.");
=======
            return Ok($"User with ID {id} deleted.");
>>>>>>> af914d213f37776eab735db7a6d45753e8bd00a6
        }
    }
}
