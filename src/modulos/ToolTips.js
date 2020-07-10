import $ from "jquery";
import Posicionamiento from "./Posicionamiento"
import "../../css/estilos-dynamics.css"

(function () {

    let origen = null 
    let ele = null 
    let comp = null
    let activo = false

    const eventoResize = () => {
        if(activo) {
            $(".mueca-aba").remove()
            $(".mueca-arr").remove()
            $(".mueca-izq").remove()
            $(".mueca-der").remove()
            activar(origen, ele)
        }
    }

    const realizarAparicion = (origen, ele) => {
        let pos = $(origen).data("pos")
        let mueca = null
        $(ele).css("left",Posicionamiento.reacomodamientoHorizontal(origen,ele))
        $(ele).css("top",Posicionamiento.reacomodamientoVertical(origen,ele))
        switch(pos) {
            case "arriba": 
                if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                } else if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                }else if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                }else if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                }
            break
            case "top":
                if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                } else if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                }else if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                }else if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                }
            break
            case "abajo": 
                if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                } else if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                }else if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                }else if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                }
            break
            case "bottom": 
                if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                } else if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                }else if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                }else if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                }
            break
            case "izquierda": 
                if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                } else if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                }else if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                }else if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                }
            break
            case "left":
                if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                } else if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                }else if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                }else if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                } 
            break
            case "derecha": 
                if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                } else if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                }else if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                }else if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                } 
            break
            case "right": 
                if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                } else if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                }else if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                }else if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                }
            break
            default:
                if(Posicionamiento.puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarAbajo(origen, ele)
                } else if(Posicionamiento.puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarArriba(origen, ele)
                }else if(Posicionamiento.puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarIzquierda(origen, ele)
                }else if(Posicionamiento.puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    Posicionamiento.posicionarDerecha(origen, ele)
                }
            break
        }
        activo = true
    }

    const activar = (origen, ele) => {
        $("body").append(ele)
        realizarAparicion(origen, ele)
    }


    const eventoClick = (e) => {
        comp = $("<div class='tips-complemento'>")
        $("body").append(comp)
        $(e).click((e) => {
            $(".tips").remove()
            origen = e.target 
            ele = $("<div class='tips'></div>")
            $(ele).append($(origen).data("tips"))
            $(comp).show()
            activar(origen, ele)
        })
        
        $(comp).click((e) => {
            $(".tips").remove()
            $(".tips-complemento").hide()
            activo = false
        })
    }



    const eventoHover= (e) => {
        $(e).hover((e) => {
            origen = e.target 
            ele = $("<div class='tips'></div>")
            $(ele).append($(origen).data("tips"))
            activar(origen, ele)
        }, () => {
            $(ele).remove()
            activo = false
        })
    }


    const inicializar = () => {
        
        $(".tips-ele").each((index, e) => {
            let evento = $(e).data("evt")
            if(evento === "click")
                eventoClick(e)
            else if(evento === "hover")
                eventoHover(e)
            else 
                eventoHover(e)
        })

        $(window).resize(eventoResize)
    }

    const destroy = () => {
        $(".tips-ele").off()
        $(window).off("resize", eventoResize)
        origen = null 
        ele = null 
        comp = null
        activo = false
    }


    const ToolTips = {
        iniciar: () => inicializar(),
        destroy: () => destroy()
    }

    window.ToolTips = ToolTips
}) ()

export default ToolTips
