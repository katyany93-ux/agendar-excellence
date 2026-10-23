                  value={servicoId}
                  onChange={(evento) => setServicoId(evento.target.value)}
                  className="w-full min-w-0 rounded-xl border border-[#D8A7B1] bg-white p-3 text-base"
                >
                  <option value="">Selecione uma opção</option>

                  {servicosDaCategoria.map((servico) => (
                    <option key={servico.id} value={servico.id}>
                      {servico.nome}
                    </option>
                  ))}
                </select>

                {selecionado && (
                  <div
                    aria-live="polite"
                    className="mt-4 rounded-xl bg-[#FFF5F6] p-4 space-y-2"
                  >
                    <h3 className="font-semibold">
                      {selecionado.nome}
                    </h3>

                    <p className="text-sm">
                      Valor:{" "}
                      <strong>{formatarPreco(selecionado.preco)}</strong>
                    </p>

                    <p className="text-sm">
                      Duração prevista:{" "}
                      <strong>
                        {formatarDuracao(selecionado.duracao_minutos)}
                      </strong>
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {agendas[categoria] ? (
            <div className="mt-4">
              <a
                href={agendas[categoria]}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-[#D8A7B1] text-white p-4 rounded-2xl font-bold text-sm shadow-sm"
              >
                Abrir agenda de{" "}
                {categoria === "cabeleireira" ? "cabeleireira" : categoria === "manicure" ? "manicure" : "cílios"}
              </a>

              <p className="mt-3 text-xs leading-relaxed text-gray-600">
                A agenda abre em outra página. O serviço escolhido aqui
                e sua duração não são enviados automaticamente.
                Confira se o horário reservado comporta o procedimento
                e, em caso de dúvida, confirme com a profissional.
              </p>
            </div>
          ) : (
            <p className="mt-4 text-sm text-center text-gray-600">
              Agendamento online de cílios em breve.
            </p>
          )}
        </section>

        <a
          href={linkEstetica}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-[#FFFCF5] p-5 rounded-2xl shadow-sm border border-[#B8860B]/40 text-[#B8860B] text-sm font-bold"
        >
          Agendar Procedimentos Estéticos
        </a>

        <section aria-labelledby="titulo-instagram">
          <h2
            id="titulo-instagram"
            className="text-center text-sm font-bold text-[#B8860B] mb-4"
          >
            Acompanhe no Instagram
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 8,
            }}
          >
            {redes.map((rede) => (
              <a
                key={rede.link}
                href={rede.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram — ${rede.nome}`}
                className="flex flex-col items-center justify-center gap-2 bg-white px-2 py-4 rounded-2xl shadow-sm text-center"
              >
                <span aria-hidden="true" className="text-xl">
                  {rede.icone}
                </span>

                <span className="text-xs font-bold">
                  {rede.nome}
                </span>
              </a>
            ))}
          </div>
        </section>

        <a
          href={linkAvaliacao}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-4 py-5 bg-[#D8A7B1] text-white text-sm font-bold rounded-2xl shadow-sm"
        >
          ⭐ Avalie sua experiência Excellence
        </a>
      </main>

      <footer className="mt-12 mb-6 text-center text-[9px] uppercase tracking-[0.2em] text-[#D8A7B1]">
        Excellence • Luxury Experience
      </footer>
    </div>
  );
}
