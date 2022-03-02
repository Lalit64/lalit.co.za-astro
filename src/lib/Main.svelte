<script>
    import Particles from 'svelte-particles';

    let particlesConfig = {
        particles: {
            number: {
                value: 60,
            },
            size: {
                value: 3,
            },
            color: {
                value: "#3D8FF6",
            },
            links: {
                color:"#3D8FF6",
                distance:150,
                enable:true,
                opacity:0.4,
                width:1
            },
            move:
                {
                    enable: true,
                    random: true,
                    speed: 6,
                }
        },
        interactivity: {
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse',
                },
            },
        },
    }

    let something = {
        "fps_limit":
            60, "interactivity":
            {
                "detectsOn":
                    "canvas", "events":
                    {
                        "onClick":
                            {
                                "enable":
                                    true, "mode":
                                    "push"
                            }
                        ,
                        "onHover":
                            {
                                "enable":
                                    true, "mode":
                                    "repulse"
                            }
                        ,
                        "resize":
                            true
                    }
                ,
                "modes":
                    {
                        "push":
                            {
                                "particles_nb":
                                    4
                            }
                        ,
                        "repulse":
                            {
                                "distance":
                                    200, "duration":
                                    0.4
                            }
                    }
            }
        ,
        "particles":
            {
                "color":
                    {
                        "value":
                            "#ffffff"
                    }
                ,
                "links":
                    {
                        "color":
                            "#ffffff", "distance":
                            150, "enable":
                            true, "opacity":
                            0.4, "width":
                            1
                    }
                ,
                "move":
                    {
                        "bounce":
                            false, "direction":
                            "none", "enable":
                            true, "outMode":
                            "out", "random":
                            false, "speed":
                            2, "straight":
                            false
                    }
                ,
                "number":
                    {
                        "density":
                            {
                                "enable":
                                    true, "area":
                                    800
                            }
                        ,
                        "value":
                            80
                    }
                ,
                "opacity":
                    {
                        "value":
                            0.5
                    }
                ,
                "shape":
                    {
                        "type":
                            "circle"
                    }
                ,
                "size":
                    {
                        "random":
                            true, "value":
                            5
                    }
            }
        ,
        "detectRetina":
            true
    }
</script>
<div class=''>
    <Particles
            id='tsparticles'
            options='{particlesConfig}'
    />
</div>

<div class='flex flex-col items-center container py-16 justify-center '>
    <img
            src='/cdn/images/Frame.png' alt='profile'
            draggable='false' class='w-1/2 md:w-52 mb-8'>
    <h1 style='color:#0C032F' class='font-header text-4xl md:text-5xl text-center font-bold mb-4 flex'>Hi, I’m <p
            class='text-accent ml-2'>Lalit</p>,
    </h1>
    <p class='text-gray-500 text-lg leading-relaxed max-w-xl text-center mb-7'>I design and build websites using tools
        like <span class='highlight '>Svelte, Astro & Supabase.</span> When I’m not freelancing I work on my own
        project, <a href='https://eduspace-gxp.vercel.app' target='_blank'><strong>EduSpace</strong></a>
    </p>
    <div class='flex space-x-4'><a
            class='border-2 border-accent rounded py-2 active:scale-90 transition duration-300 text-sm md:text-base px-4 bg-accent text-white'
            href='/#contact'>Contact Me</a><a
            class='border-2 border-accent rounded py-2 active:scale-90 transition duration-300 text-sm md:text-base px-4 hover:bg-accent hover:text-white'
            href='/blog'>My
        Blog</a>
    </div>
</div>

<style>
    .highlight {
        background: linear-gradient(180deg, transparent, transparent 55%, rgba(61, 144, 246, 0.2) 0, rgba(61, 144, 246, 0.2));
    }
</style>