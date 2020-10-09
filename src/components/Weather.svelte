<script>
    export let condition;
    export let mini = "";
</script>

<style>
	
</style>

<div class="uk-padding-remove">
        {#if condition == ""}
        <div class="icon {mini} sun-shower">
            <div class="cloud"></div>
            <div class="sun">
                <div class="rays"></div>
            </div>
            <div class="rain"></div>
        </div>
        {/if}

        {#if condition == ""}
        <div class="icon {mini} sun-shower">
            <div class="cloud"></div>
            <div class="sun">
                <div class="rays"></div>
            </div>
            <div class="rain"></div>
        </div>
        {/if}

        {#if condition == "11d"}
        <div class="icon {mini} thunder-storm">
            <div class="cloud"></div>
            <div class="lightning">
                <div class="bolt"></div>
                <div class="bolt"></div>
            </div>
        </div>
        {/if}

        {#if condition == "11n"}
        <div class="icon {mini} thunder-storm">
            <div class="cloud"></div>
            <div class="lightning">
                <div class="bolt"></div>
                <div class="bolt"></div>
            </div>
        </div>
        {/if}

        {#if condition == "04d"}
        <div class="icon {mini} cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
        {/if}

        {#if condition == "04n"}
        <div class="icon {mini} cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
        {/if}
        
        {#if condition == "03d"}
        <div class="icon {mini} cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
        {/if}

        {#if condition == "50d"}
        <div class="icon {mini} cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
        {/if}

        {#if condition == "13d"}
        <div class="icon {mini} flurries">
            <div class="cloud"></div>
            <div class="snow">
                <div class="flake"></div>
                <div class="flake"></div>
            </div>
        </div>
        {/if}

        {#if condition == "13d"}
        <div class="icon {mini} flurries">
            <div class="cloud"></div>
            <div class="snow">
                <div class="flake"></div>
                <div class="flake"></div>
            </div>
        </div>
        {/if}

        {#if condition == "01d"}
        <div class="icon {mini} sunny">
            <div class="sun">
                <div class="rays"></div>
            </div>
        </div>
        {/if}

        {#if condition == "01n"}
        <div class="icon {mini} night">
            <div class="moon"></div>
        </div>
        {/if}

        {#if condition == "02n"}
        <div class="icon {mini} partly-cloudy-night">
            <div class="moon"></div>
            <div class="cloud"></div>
        </div>
        {/if}

        {#if condition == "02d"}
        <div class="icon {mini} partly-cloudy-day">
            <div class="cloud"></div>
            <div class="sun">
                <div class="rays"></div>
            </div>
        </div>
        {/if}

        {#if condition == "10d"}
        <div class="icon {mini} rainy">
            <div class="cloud"></div>
            <div class="rain"></div>
        </div>
        {/if}
</div>