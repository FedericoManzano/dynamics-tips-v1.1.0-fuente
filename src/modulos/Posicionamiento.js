import $ from "jquery"

class Posicionamiento {
    static posicionamientoInicialX  (origen, ele) {
        var x = $(origen).offset().left
        $(ele).css("left", x)
        return x
    }

    static posicionamientoInicialY  (origen, ele) {
        var y = $(origen).offset().top
        $(ele).css("top", y)
        return y
    }

    static puedeArriba  (origen, ele) {
        const offsetTopOrigen = $(origen).offset().top
        const wScrollTop = $(window).scrollTop() 
        const tipsHeight = $(ele).outerHeight()
        return offsetTopOrigen - wScrollTop >  tipsHeight + 10
    }

    static puedeAbajo (origen, ele)  {
        const windowHeight = $(window).height()
        const wScrollTop = $(window).scrollTop() 
        const origenOffsetTop = $(origen).offset().top
        const origenHeight = $(origen).outerHeight()
        const tipsHeight = $(ele).outerHeight()
        return windowHeight + wScrollTop - 
                (origenOffsetTop + origenHeight)  
                                > tipsHeight + 10
    }


    static puedeDerecha (origen, ele) {
        const windowWidth = $(window).width()
        const origenOffsetLeft = $(origen).offset().left
        const origenWidth = $(origen).width()
        const tipsWidth = $(ele).width()
        return windowWidth - origenOffsetLeft - origenWidth - 80 > tipsWidth + 5
    }

    static puedeIzquierda  (origen, ele) {
        return $(origen).offset().left > $(ele).width() + 5
    }

    static reacomodamientoHorizontal (origen, ele) {
        var corr = ($(origen).outerWidth() ) - $(ele).outerWidth()
        return Posicionamiento.posicionamientoInicialX(origen,ele) +  Math.round(corr / 2)
    }

    static reacomodamientoVertical (origen, ele) {
        var corr = ($(origen).outerHeight() ) - $(ele).outerHeight()
        return Posicionamiento.posicionamientoInicialY(origen,ele) + Math.round(corr / 2)
    }


    static topeIzquierda  (ele) {
        const despIzq = $(ele).offset().left
        return despIzq <= 0 ? despIzq*-1 : 0
    }

    static topeArriba (ele) {
        const despArr = $(ele).offset().top - $(window).scrollTop()
        return despArr <= 0 ? (despArr - 10)*-1 : 0
    }

    static topeDerecha  (ele) {
        const despDer = $(window).width() - $(ele).offset().left - $(ele).outerWidth()
        return despDer <= 0 ? Math.round((despDer - 10)) : 0
    }

    static posicionarArriba (origen, ele) {
        $(ele).css("top", $(origen).offset().top - $(ele).outerHeight() - 5)

        var di = Posicionamiento.topeIzquierda(ele)
        var td = Posicionamiento.topeDerecha(ele) 

        if(di !== 0){
            $(ele).css("left",  Posicionamiento.reacomodamientoHorizontal(origen,ele) + di)
            td=0
        }
        if(td !== 0)
            $(ele).css("left",  Posicionamiento.reacomodamientoHorizontal(origen,ele) + td )
        $(ele).css({transform: 'translateY(-12px)'})
    }


    static posicionarAbajo (origen, ele)  {
        $(ele).css("top", $(origen).offset().top +$(origen).outerHeight() + 5)
        var di = Posicionamiento.topeIzquierda(ele)
        var td = Posicionamiento.topeDerecha(ele) 
        if(di !== 0){
            $(ele).css("left",  Posicionamiento.reacomodamientoHorizontal(origen,ele) + di)
            td=0
        }
        if(td !== 0)
            $(ele).css("left",  Posicionamiento.reacomodamientoHorizontal(origen,ele) + td )
        $(ele).css({transform: 'translateY(12px)'})
    }

    static posicionarIzquierda (origen, ele) {
        $(ele).css("left", $(origen).offset().left - $(ele).width() - 25)
        var da = Posicionamiento.topeArriba(ele)
        if(da !== 0)
            $(ele).css("top", Posicionamiento.reacomodamientoVertical(origen,ele) + da)
        $(ele).css({transform: 'translateX(-12px)'})
    }

    static posicionarDerecha (origen, ele) {
        $(ele).css("left", $(origen).offset().left + $(origen).outerWidth() + 10)
        let da = Posicionamiento.topeArriba(ele)
        if(da !== 0)
           $(ele).css("top", Posicionamiento.reacomodamientoVertical(origen, ele) + da)
        $(ele).css({transform: 'translateX(12px)'})
    }

}


export default Posicionamiento