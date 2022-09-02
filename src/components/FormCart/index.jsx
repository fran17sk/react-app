const FormCart = () => {
    return(
        <form action="" class="formulario" id="formulario">
                                <div class="formulario__grupo" id="grupo__apellido">
                                    <label for="apellido" class="formulario__label">Apellido</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="usuario" id="usuario" placeholder="Ej: Cruz"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__nombre">
                                    <label for="nombre" class="formulario__label">Nombre</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="Ej: Franco"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El nombre no puede contener numeros ni simbolos</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__correo">
                                    <label for="correo" class="formulario__label">Correo Electrónico</label>
                                    <div class="formulario__grupo-input">
                                        <input type="email" class="formulario__input" name="correo" id="correo" placeholder="correo@correo.com"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.</p>
                                </div>
                                <div class="formulario__grupo" id="grupo__telefono">
                                    <label for="telefono" class="formulario__label">Teléfono</label>
                                    <div class="formulario__grupo-input">
                                        <input type="text" class="formulario__input" name="telefono" id="telefono" placeholder="4491234567"/>
                                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                    </div>
                                    <p class="formulario__input-error">El telefono solo puede contener numeros y el maximo son 14 dígitos.</p>
                                </div>
                                <div class="formulario__mensaje" id="formulario__mensaje">
                                    <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                                </div>
                            </form>
    )
}
export {FormCart};