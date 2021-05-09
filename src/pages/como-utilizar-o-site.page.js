import React, { useEffect, useState } from "react";
import "../styles/como-utilizar-o-site.css";

function ComoUtilizaroSite() {
    return (
        <div>
            <h2 class="title-utilizarsite">Como Utilizar o Site</h2>
            <h2 class="subtitle-utilizarsite">Veja abaixo os tutoriais de como mexer no site</h2>
            <h2> </h2>
            <div class="row">
                <div class="col-6">
                    <h2 class="title-utilizarsite">Tutoriais para o Cliente</h2>
                </div>
                <hr class="howtouse-hr" />
                <div class="col-6">
                    <h2 class="title-utilizarsite">Tutoriais para o Profissional</h2>
                </div>
            </div>
        </div >
    );
}
export default ComoUtilizaroSite;