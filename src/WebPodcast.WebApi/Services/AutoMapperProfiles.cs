﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using WebPodcast.WebApi.DTO;
using WebPodcast.WebApi.Models;
using WebPodcast.WebApi.ViewModel;

namespace WebPodcast.WebApi.Services
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Podcast, PodcastForList>()
                .ForMember(dest => dest.Photo, opt => 
                    opt.MapFrom(src => File.ReadAllBytes(src.Photo)));
            CreateMap<Podcast, PodcastForDetailed>()
                .ForMember(dest => dest.Photo, opt =>
                    opt.MapFrom(src => File.ReadAllBytes(src.Photo)));
            CreateMap<Record, RecordsForPodcastDetailed>();
        }
    }
}