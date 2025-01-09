using bakeryBE.Models;
using bakeryBE.Models.Validation;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace bakeryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly BakeryContext _context;

        public OrderController(BakeryContext context)
        {
            _context = context;
        }

        // GET: api/order
        [HttpGet]
        public async Task<IActionResult> GetOrder()
        {
            var orders = await _context.Ordinis.ToListAsync();
            return Ok(orders);
        }

        // GET api/order/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid ID");
            }

            var order = await _context.Ordinis.FindAsync(id);

            if (order == null)
            {
                return NotFound();
            }

            return Ok(order);
        }

        // POST api/order
        [HttpPost]
        public async Task<IActionResult> AddOrder([FromBody] Ordini order)
        {
            if (order == null)
            {
                return BadRequest("User data is null.");
            }

            _context.Ordinis.Add(order);
            await _context.SaveChangesAsync();

            return Ok($"The order was created with ID {order.Idordini}");
        }

        // PUT api/order/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder(int id, [FromBody] Ordini value)
        {
            if (value == null)
            {
                return BadRequest("Invalid data.");
            }

            var order = await _context.Ordinis.FindAsync(id);

            if (order == null)
            {
                return NotFound($"User with ID {id} not found.");
            }

            if (!string.IsNullOrEmpty(value.Notes)) { order.Notes = value.Notes; }
            if (value.Prod > 0) { order.Prod = value.Prod; }
            if (value.Quantita > 0) { order.Quantita = value.Quantita; }
            if (value.Data != DateTime.MinValue){order.Data = value.Data;}


            _context.Ordinis.Update(order);
            await _context.SaveChangesAsync();

            return Ok($"Order N {order.Idordini} updated.");
        }

        // DELETE api/order/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id, [FromBody] Verifica? token)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid ID.");
            }

            var order = await _context.Ordinis.FindAsync(id);

            if (order == null)
            {
                return NotFound($"Order with ID {id} not found.");
            }

            if (token == null || string.IsNullOrWhiteSpace(token.auth))
            {
                return BadRequest("Authorization token required.");
            }

            // Simula la validazione del token
            if (token.auth == $"{order.Utente}") 
            {
                _context.Ordinis.Remove(order);
                await _context.SaveChangesAsync();

                return Ok($"Order with ID {id} deleted.");
            }

            return Unauthorized("Invalid token.");
        }
    }
}
