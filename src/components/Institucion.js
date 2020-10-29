export const Institucion = (props) => {
    // let generalKey = 0;
    let campos = [];
    for (let i = 0; i < props.experiencia.length; i++) {
        campos[i] = props.experiencia[i].map(e => {
            const etiqueta = e.etiqueta;
            const items = e.items;
            const clases = e.clases;
            if (clases.includes("items")) {
                const ul = items.map((f) => {
                    return (
                        <li key={f} className={clases}>
                            {f}
                        </li>
                    );
                });
                return (
                    <div className="contenedor">
                        <div className="contenido">
                            <p>{etiqueta}</p>
                            <ul>{ul}</ul>
                        </div>
                        <div className="copiarContenido">Marcar Grupo</div>
                    </div>
                );
            } else {
                return (
                    <div className="contenedor">
                        <p className="contenido">
                            {etiqueta}
                            {": "}
                            <span className={clases}>{items}</span>
                        </p>
                        <div className="copiarContenido">Marcar Grupo</div>
                    </div>
                );
            }
        });
    }
    return (
        <div id="institucion" onClick={props.onClick}>
            {campos}
        </div>
    );
};
