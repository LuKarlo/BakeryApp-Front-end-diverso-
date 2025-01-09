using Microsoft.AspNetCore.Mvc;
using bakeryBE.Models;
using bakeryBE.Models.Validation;
using Microsoft.EntityFrameworkCore;
using System;
using Newtonsoft.Json.Linq;

namespace bakeryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly BakeryContext _context;

        public UserController(BakeryContext context)
        {
            _context = context;
        }

        // GET: api/user
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var users = await _context.Utentis.ToListAsync();
            return Ok(users);
        }

<<<<<<< HEAD
        // GET: api/user/get/?usr&&pws
        [Route("get")]
        [HttpGet]
        public async Task<IActionResult> GetUserPass([FromQuery(Name = "usr")] string usr, [FromQuery(Name = "pws")] string pws)
        {
            var user = await _context.Utentis.FirstOrDefaultAsync(u => u.Username == usr && u.Password == pws);

            if (user == null)
            {
                return NotFound("Utente non trovato o credenziali errate.");
            }

            return Ok(user);
        }

=======
>>>>>>> af914d213f37776eab735db7a6d45753e8bd00a6
        // GET api/user/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid ID");
            }

            var user = await _context.Utentis.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // POST api/user
        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] Utenti user)
        {
            if (user == null)
            {
                return BadRequest("User data is null.");
            }

            user.Role = 0;

            _context.Utentis.Add(user);
            await _context.SaveChangesAsync();

            return Ok($"User {user.Username} created with ID {user.Idutente}");
        }

        // PUT api/user/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] Utenti value)
        {
            if (value == null)
            {
                return BadRequest("Invalid data.");
            }

            var user = await _context.Utentis.FindAsync(id);

            if (user == null)
            {
                return NotFound($"User with ID {id} not found.");
            }

            if (!string.IsNullOrEmpty(value.Tel)) user.Tel = value.Tel;
            if (!string.IsNullOrEmpty(value.Email)) user.Email = value.Email;
            if (!string.IsNullOrEmpty(value.Username)) user.Username = value.Username;
            if (!string.IsNullOrEmpty(value.Password)) user.Password = value.Password;

            _context.Utentis.Update(user);
            await _context.SaveChangesAsync();

            return Ok($"User {user.Username} updated.");
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id, [FromBody] Verifica? token)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid ID.");
            }

            var user = await _context.Utentis.FindAsync(id);

            if (user == null)
            {
                return NotFound($"User with ID {id} not found.");
            }

            if (user.Role == 2)
            {
                if (token == null || string.IsNullOrWhiteSpace(token.auth))
                {
                    return BadRequest("Authorization token required.");
                }

                // Simula la validazione del token
                if (token.auth != "valore_segreto") // Cambia con la tua logica
                {
                    return Unauthorized("Invalid token.");
                }
            }

            _context.Utentis.Remove(user);
            await _context.SaveChangesAsync();

            return Ok($"User with ID {id} deleted.");
        }
    }
}
