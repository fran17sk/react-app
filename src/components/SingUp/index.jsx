
const SingUp = () => {

    return (<>
        <section class="cuentaFlex">
            <div>
                <img src="../img/recta.jpg" alt="" class="recta"/>
            </div>
            <div class="cuentaFlexItem">
                <h2>Crear Cuenta</h2>
                <form action="" class="formulario" id="formulario">
                    <div class="formulario__grupo" id="grupo__usuario">
                        <label for="usuario" class="formulario__label">Usuario</label>
                        <div class="formulario__grupo-input">
                            <input type="text" class="formulario__input" name="usuario" id="usuario" placeholder="john123"/>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo.</p>
                    </div>


                    <div class="formulario__grupo" id="grupo__nombre">
                        <label for="nombre" class="formulario__label">Nombre</label>
                        <div class="formulario__grupo-input">
                            <input type="text" class="formulario__input" name="nombre" id="nombre" placeholder="John Doe"/>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                        </div>
                        <p class="formulario__input-error">El nombre no puede contener numeros ni simbolos</p>
                    </div>


                    <div class="formulario__grupo" id="grupo__password">
                        <label for="password" class="formulario__label">Contraseña</label>
                        <div class="formulario__grupo-input paswordFlex">
                            <input type="password" class="formulario__input" name="password" id="password"/>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" onclick="myFunction1()" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                        </div>
                        <p class="formulario__input-error">La contraseña tiene que ser de 4 a 12 dígitos.</p>
                    </div>


                    <div class="formulario__grupo" id="grupo__password2">
                        <label for="password2" class="formulario__label">Repetir Contraseña</label>
                        <div class="formulario__grupo-input paswordFlex">
                            <input type="password" class="formulario__input" name="password2" id="password2"/>
                                <i class="formulario__validacion-estado fas fa-times-circle"></i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" onclick="myFunction2()" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                        </div>
                        <p class="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
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


                    <div class="formulario__grupo" id="grupo__terminos">
                        <label class="formulario__label">
                            <input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos"/>
                                Acepto los Terminos y Condiciones
                        </label>
                    </div>

                    <div class="formulario__mensaje" id="formulario__mensaje">
                        <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente. </p>
                    </div>

                    <div class="formulario__grupo formulario__grupo-btn-enviar">
                        <button type="submit" class="formulario__btn">Enviar</button>
                        <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
                    </div>
                </form>

            </div>
        </section>
    </>)
}

export { SingUp }