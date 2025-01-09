using System;
using System.Collections.Generic;

namespace bakeryBE.Models;

public partial class Ordini
{
    public int Idordini { get; set; }

    public int Utente { get; set; }

    public int Prod { get; set; }

    public int Quantita { get; set; }

    public string? Notes { get; set; }

    public DateTime Data { get; set; }

    public virtual Prodotti? ProdNavigation { get; set; }

    public virtual Utenti? UtenteNavigation { get; set; }
}
