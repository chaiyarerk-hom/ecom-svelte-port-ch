<script lang="ts">
    import { Play, Pause } from '@lucide/svelte';
    import videoSource from "$lib/assets/videos/movie.mp4";

    let videoElement: HTMLVideoElement;
    let paused = true;

    function togglePlayPause() {
        if (videoElement.paused) {
        videoElement.play();
        } else {
        videoElement.pause();
        }
    }

    function handlePlay() {
        paused = false;
    }

    function handlePause() {
        paused = true;
    }
</script>

<video
    bind:this={videoElement}
    src={videoSource}
    onplay={handlePlay}
    onpause={handlePause}
    controls={false}
    width="85%"
    >
    <track kind="captions">
 </video>

    {#if paused}
        <button class="absolute top=1/2 left=1/2 transform -translate-x-1/2 translate-y-1/2 hover:cursor-pointer" onclick={togglePlayPause} aria-label="Play video">
            <Play class="text-white sm:scale-125 md:scale-150 lg:scale-175" />
        </button>
    {:else}
        <button class="absolute top=1/2 left=1/2 transform -translate-x-1/2 translate-y-1/2 hover:cursor-pointer" onclick={togglePlayPause} aria-label="Pause video">
            <Pause class="text-white sm:scale-125 md:scale-150 lg:scale-175" />
        </button>
    {/if}