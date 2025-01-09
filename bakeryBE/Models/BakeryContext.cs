using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace bakeryBE.Models;

public partial class BakeryContext : DbContext
{
    public BakeryContext()
    {
    }

    public BakeryContext(DbContextOptions<BakeryContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Ordini> Ordinis { get; set; }

    public virtual DbSet<Prodotti> Prodottis { get; set; }

    public virtual DbSet<Utenti> Utentis { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("name=dbConnection");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Ordini>(entity =>
        {
            entity.HasKey(e => e.Idordini).HasName("PK__Ordini__E69652999C31D0A1");

            entity.ToTable("Ordini");

            entity.Property(e => e.Data).HasColumnType("datetime");
            entity.Property(e => e.Notes).HasColumnType("text");

            entity.HasOne(d => d.ProdNavigation).WithMany(p => p.Ordinis)
                .HasForeignKey(d => d.Prod)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_Ordini_Prodotti");

            entity.HasOne(d => d.UtenteNavigation).WithMany(p => p.Ordinis)
                .HasForeignKey(d => d.Utente)
                .OnDelete(DeleteBehavior.Cascade)
                .HasConstraintName("FK_Ordini_Utenti");
        });

        modelBuilder.Entity<Prodotti>(entity =>
        {
            entity.HasKey(e => e.Idprodotto).HasName("PK__Prodotti__6A22EF3B00F0CB62");

            entity.ToTable("Prodotti");

            entity.Property(e => e.Ingredienti)
                .HasColumnType("text")
                .HasColumnName("ingredienti");
            entity.Property(e => e.Prezzo)
                .HasColumnType("decimal(18, 2)")
                .HasColumnName("prezzo");
            entity.Property(e => e.ProdName)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("prodName");
            entity.Property(e => e.Prodesc)
                .HasColumnType("text")
                .HasColumnName("prodesc");
            entity.Property(e => e.Quantita).HasColumnName("quantita");
        });

        modelBuilder.Entity<Utenti>(entity =>
        {
            entity.HasKey(e => e.Idutente).HasName("PK__Utenti__C5B8E66F4190B022");

            entity.ToTable("Utenti");

            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(30)
                .IsUnicode(false);
            entity.Property(e => e.Tel)
                .HasMaxLength(15)
                .IsUnicode(false);
            entity.Property(e => e.Username)
                .HasMaxLength(50)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
