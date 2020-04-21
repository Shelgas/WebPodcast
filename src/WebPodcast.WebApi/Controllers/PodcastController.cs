using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebPodcast.WebApi.Data;
using WebPodcast.WebApi.DTO;

namespace WebPodcast.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PodcastController : ControllerBase
    {
        private readonly IDatingRepository _repo;
        private readonly IWebHostEnvironment _environment;
        private readonly IMapper _mapper;

        public PodcastController(IDatingRepository repo, IWebHostEnvironment environment, IMapper mapper)
        {
            _repo = repo;
            _environment = environment;
            _mapper = mapper;
        }


        [HttpGet]
        public async Task<IActionResult> GetPodcasts()
        {
           
            var podcasts = await _repo.GetPodcasts();
            var podcastForLists = _mapper.Map<IEnumerable<PodcastForList>>(podcasts);
            return Ok(podcastForLists);
        }
    }
}