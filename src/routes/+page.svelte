<script lang=ts>
    import type { PageServerData } from './$types';
    export let data: PageServerData;
    const _artistIsOnTour = "This artist is on tour!";
    const _artistIsNotOnTour = "This artist is chilling home!";
</script>

<div class="mx-auto">
    <h1 class="text-5xl">The Artist Svelte list</h1>
    <hr/>
    <div class="flex flex-wrap mt-2">
        {#each data.item as artist}
            <div class="card w-96 bg-base-100 shadow-xl m-1.5">                
                <div class="card-body">
                    <h2 class="card-title">{artist.name}</h2>
                    <p>{ artist.isOnTour ? 
                        _artistIsOnTour : _artistIsNotOnTour }</p>
                    <div class="card-actions justify-end">
                    <button disabled={ !artist.isOnTour} class="btn btn-primary">Buy Tickets</button>
                    </div>
                </div>
            </div>    
        {/each}
    </div>
    <p>The list contains: {data.item.length} artists</p>
</div>
