using System;
using System.Collections.Generic;

namespace bakeryBE.Models;

public partial class Utenti
{
    public int Idutente { get; set; }

    public string Username { get; set; }

    public string Password { get; set; }

    public string Email { get; set; }

    public string? Tel { get; set; }

    public byte Role { get; set; }

    public virtual ICollection<Ordini> Ordinis { get; set; } = new List<Ordini>();
}
