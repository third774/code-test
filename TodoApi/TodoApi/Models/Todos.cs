using System;
using System.Collections.Generic;

namespace TodoApi.Models
{
    public partial class Todos
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public bool Complete { get; set; }
    }
}
