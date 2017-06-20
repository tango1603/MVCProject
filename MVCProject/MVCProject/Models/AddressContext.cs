using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Web;

namespace MVCProject.Models
{
    public class AddressContext : DbContext
    {
        public AddressContext()
            : base("name=AddressContext")
        {
        }

       /* protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }*/

        public DbSet<Address> Addreses { get; set; }
    }
}