using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebPodcast.WebApi.Data;

namespace WebPodcast.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PodcastController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        
        public PodcastController(IDatingRepository repo)
        {
            _repo = repo;
        }


        [HttpGet]
        public async Task<IActionResult> GetPodcasts()
        {
            var podcasts = await _repo.GetPodcasts();
            return Ok(podcasts);
        }
    }
}