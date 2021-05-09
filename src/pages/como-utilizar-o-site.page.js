import React, { useEffect, useState } from "react";
import "../styles/como-utilizar-o-site.css";

function ComoUtilizaroSite() {
    return (
        <div>
            <h2 class="title-utilizarsite">Como Utilizar o Site</h2>
            <h2 class="subtitle-utilizarsite">Veja abaixo os tutoriais de como mexer no site</h2>
            <h2> </h2>
            <div class="row row-all-howtouse">
                <div class="column column-each-howtouse">
                    <div class="row row-title-howtouse">
                        <h2 class="title-utilizarsite">Tutoriais para o Cliente</h2>
                    </div>
                    <div class="row row-subtitle-howtouse">
                        Nome do bagulho 1
                    </div>
                    <div class="row row-video-howtouse">
                        Vídeo do bagulho 1
                    </div>
                </div>
                <div class="column column-each-howtouse">
                    <div class="row row-title-howtouse">
                        <h2 class="title-utilizarsite">Tutoriais para o Profissional</h2>
                    </div>
                    <div class="row row-subtitle-howtouse">
                        Nome do bagulho 2
                    </div>
                    <div class="row row-video-howtouse">
                        Vídeo do bagulho 2
                    </div>
                </div>
            </div>
        </div >
    );
}
export default ComoUtilizaroSite;