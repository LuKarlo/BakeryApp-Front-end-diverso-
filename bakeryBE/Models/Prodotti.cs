using System;
using System.Collections.Generic;

namespace bakeryBE.Models;

public partial class Prodotti
{
    public int? Idprodotto { get; set; }

    public string ProdName { get; set; }

    public int Quantita { get; set; }

    public decimal Prezzo { get; set; }

    public string? Prodesc { get; set; }

    public string? Ingredienti { get; set; }

    public virtual ICollection<Ordini> Ordinis { get; set; } = new List<Ordini>();
}
