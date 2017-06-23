using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    public class TodosController : Controller
    {
        public TodoContext context { get; set; }

        public TodosController() {
            context = new TodoContext();
        }

        // GET api/values
        [HttpGet]
        public IEnumerable<Todos> Get() {
            return context.Todos.ToList();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public Todos Post([FromBody]Todos value) {
            context.Todos.Add(value);
            context.SaveChanges();
            return value;
        }

        // PUT api/values/5
        [HttpPut]
        public Todos Put([FromBody]Todos todo)
        {
            var todoToUpdate = context.Todos.Find(todo.Id);
            todoToUpdate.Title = todo.Title;
            todoToUpdate.Description = todo.Description;
            todoToUpdate.Complete = todo.Complete;
            context.SaveChanges();
            return todoToUpdate;
        }

        // DELETE api/values/5
        [HttpDelete("{id:guid}")]
        public Todos Delete(Guid id) {
            var todo = context.Todos.Find(id);
            context.Todos.Remove(todo);
            context.SaveChanges();
            return todo;
        }
    }
}
