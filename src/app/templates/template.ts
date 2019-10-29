export const TemplateStyle: string = `<style>
*{
		font-family: sans-serif;
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	.custom-card {
		border-radius: 0.3em;
		width: 20rem;
		margin-right: 1rem;
		margin-bottom: 1rem;
		padding: 0.7em;
		background: #f3f3f3;
	}

	@media print {
		
		* {
			font: 12pt Georgia, "Times New Roman", Times, serif;
			line-height: 1;
		}
		@page {
			margin: 0.5cm;
		}
 	}
</style>`;

export const TemplatePDF = (report, pathBase): string => `
<section id="reportContent" style="margin-right: -15px;margin-left: -15px; text-transform: uppercase;">
${
  report.sucesso.includes("Arisp")
    ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados Imobiliários</h5>
			<hr>
			<div style="margin-bottom: 1rem; margin: 0 auto;">
				<!-- PDF -->
				${report.arispPathImg
          .map(
            img =>
              `<img style="max-width: 100%; display: block; max-height: 80%;" src="${pathBase +
                img}"></img>`
          )
          .join("")}
			</div>
		</div>
	</section>`
    : ""
}

	${
    report.sucesso.includes("Arpenp")
      ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados de Registro Civil</h5>
			<hr>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Carta registro:</strong>
				${report.cartregistro || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>CNS:</strong> ${report.cns ||
        "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome 1:</strong> ${report.nome1 ||
        "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Novo nome 1:</strong>
				${report.nvnome1 || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome 2:</strong> ${report.nome2 ||
        "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Novo nome 2:</strong>
				${report.nvnome2 || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Data Casamento:</strong>
				${report.dataCasamento || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Matrícula:</strong>
				${report.matricula || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Data Entrada:</strong>
				${report.dataEntrada || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Data Registro:</strong>
				${report.dataRegistro || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Acervo:</strong> ${report.acervo ||
        "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Número Livro:</strong>
				${report.nlivro || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Número Folha:</strong>
				${report.nfolha || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Número Registro:</strong>
				${report.nregistro || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Tipo Livro:</strong>
				${report.tipolivro || "-"}</span>
		</div>
	</section>`
      : ""
  }

	${
    report.sucesso.includes("Cadesp")
      ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados de Cadastro Empresarial</h5>
			<hr>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>CNPJ:</strong> ${report.cnpj ||
        "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome Empresarial:</strong>
				${report.nomeEmpresarial || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>DRT:</strong> ${report.drt ||
        "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Situação:</strong>
				${report.situacao || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Data Inscrição Estado:</strong>
				${report.dtInscricaoEstado || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Regime Estadual:</strong>
				${report.regimeEstadual || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Posto Fiscal:</strong>
				${report.postoFiscal || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome Fantasia:</strong>
				${report.nomeFantasia || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>NIRE:</strong> ${report.nire ||
        "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Situação Cadastral:</strong>
				${report.situacaoCadastral || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Ocorrência Fiscal:</strong>
				${report.ocorrenciaFiscal || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Tipo Unidade:</strong>
				${report.tipoUnidade || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Data Início IE:</strong>
				${report.dtInicioIE || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Data Início Situação:</strong>
				${report.dtInicioSituacao || "-"}</span>
			<span style="display: block; margin-bottom: 0.5rem;"><strong>Formas Atuação:</strong>
				${report.formasAtuacao || "-"}</span>
		</div>
	</section>`
      : ""
  }

${
  report.sucesso.includes("Caged")
    ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados Administrativos do Trabalhador
			</h5>
			<hr>
			<div style="margin-bottom: 1rem;">
				<h5 class="font-weight-bold">Autorizado Responsável</h5>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Bairro:</strong>
					${(report.autorizado_responsavel || {}).bairro || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>CEP:</strong>
					${(report.autorizado_responsavel || {}).cep || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>CNPJ CPF CEI:</strong>
					${(report.autorizado_responsavel || {}).cnpj_cpf_cei || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>CPF:</strong>
					${(report.autorizado_responsavel || {}).cpf || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Email:</strong>
					${(report.autorizado_responsavel || {}).email || "-"}</span>
			</div>
			<div style="margin-bottom: 1rem;">
				<h5 class="font-weight-bold">Empresa</h5>
				<span style="font-weight:bold; display:block; margin-bottom: 0.5rem;">Atividade Econômica CNAE</span>
				<span style="display: block; margin-bottom: 0.5rem;">${
          (report.empresa || {}).atividade_economica_cnae
        }</span>
				<span style="font-weight:bold; display:block; margin-bottom: 0.5rem;">Totais</span>
				<span style="display: block; margin-bottom: 0.5rem;">Admissões:
					${((report.empresa || {}).totais || {}).admissoes || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;">Desligamentos:
					${((report.empresa || {}).totais || {}).desligamentos || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;">Números filiais:
					${((report.empresa || {}).totais || {}).numeros_filiais || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;">Primeiro dia:
					${((report.empresa || {}).totais || {}).primeiro_dia || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;">Total vínculos:
					${((report.empresa || {}).totais || {}).total_vinculo || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;">Último dia:
					${((report.empresa || {}).totais || {}).ultimo_dia || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;">Variação absoluta:
					${(report.empresa || {}).variacao_absoluta || "-"}</span>
			</div>
			<div style="margin-bottom: 1rem;">
				<h5 class="font-weight-bold">Trabalhador</h5>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>CPF:</strong>
					${(report.trabalhador || {}).cpf || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>CTPS:</strong>
					${(report.trabalhador || {}).ctps || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Grau de Instrução:</strong>
					${(report.trabalhador || {}).grau_de_instrucao || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nacionalidade:</strong>
					${(report.trabalhador || {}).nacionalidade || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome:</strong>
					${(report.trabalhador || {}).nome || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>PCD:</strong>
					${(report.trabalhador || {}).pcd || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>PIS Base:</strong>
					${(report.trabalhador || {}).pis_base || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Raça:</strong>
					${(report.trabalhador || {}).raca || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Sexo:</strong>
					${(report.trabalhador || {}).sexo || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Situação PIS:</strong>
					${(report.trabalhador || {}).situacao_pis || "-"}</span>
				<span class="font-weight-bold d-block">Tempo de trabalho</span>
				<span style="display: block; margin-bottom: 0.5rem;">CAGED: ${(
          report.trabalhador || {}
        ).caged || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;">RAIS: ${(
          report.trabalhador || {}
        ).rais || "-"}</span>
				<span class="font-weight-bold d-block">Vínculos do trabalhador</span>
				<div class="d-flex flex-wrap">
					${(report.trabalhador || {}).vinculos_trabalhador
            .map(
              vinculo =>
                `<div class="custom-card">
								<span style="display: block; margin-bottom: 0.5rem;">CEI: ${vinculo.cei ||
                  "-"}</span>
								<span style="display: block; margin-bottom: 0.5rem;">CNPJ: ${vinculo.cnpj ||
                  "-"}</span>
								<span style="display: block; margin-bottom: 0.5rem;">Entrada: ${vinculo.entrada ||
                  "-"}</span>
								<span style="display: block; margin-bottom: 0.5rem;">Fonte: ${vinculo.fonte ||
                  "-"}</span>
								<span style="display: block; margin-bottom: 0.5rem;">Razão social:
									${vinculo.razao_social || "-"}</span>
								<span style="display: block; margin-bottom: 0.5rem;">Saída: ${vinculo.saida ||
                  "-"}</span>
								<span style="display: block; margin-bottom: 0.5rem;">Situação: ${vinculo.situacao ||
                  "-"}</span>
							</div>`
            )
            .join("")}
				</div>
			</div>
		</div>
	</section>`
    : ""
}

${
  report.sucesso.includes("Censec")
    ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados de Notas Públicas</h5>
			<hr>
			<div style="margin-bottom: 1rem;">
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Carga:</strong> ${
          report.carga
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Mes:</strong> ${
          report.mes
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Ano:</strong> ${
          report.ano
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Ato:</strong> ${
          report.ato
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Dia do ato:</strong> ${
          report.diaDoAto
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Mes do ato:</strong> ${
          report.mesDoAto
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Ano do ato:</strong> ${
          report.anoDoAto
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Livro:</strong> ${
          report.livro
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Complemento livro:</strong>
					${report.complementoLivro}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Folha:</strong> ${
          report.folha
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Complemento folha:</strong>
					${report.complementoFolha}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>UF:</strong> ${
          report.uf
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Município:</strong> ${
          report.municipio
        }</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Cartório:</strong> ${
          report.cartorio
        }</span>
				<span class="font-weight-bold d-block">Pessoas</span>
				<div class="d-flex flex-wrap">
					${report.pessoas
            .map(
              pessoa =>
                `<div class="custom-card">
							<span style="display: block; margin-bottom: 0.5rem;">CPF: ${pessoa.cpf}</span>
							<span style="display: block; margin-bottom: 0.5rem;">Nome: ${pessoa.nome}</span>
							<span style="display: block; margin-bottom: 0.5rem;">Qualidade: ${pessoa.qualidade}</span>
						</div>`
            )
            .join("")}
				</div>
			</div>
		</div>
	</section>`
    : ""
}

${
  report.sucesso.includes("Detran")
    ? `<section>
				<div style="padding: 1.5rem;">
					<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados do Motorista</h5>
					<hr>
					<!-- PDFS -->
					${report.detranPathImg
            .map(
              img =>
                `<img style="max-width: 100%; display: block; max-height: 80%;" src="${pathBase +
                  img}"></img>`
            )
            .join("")}
				</div>
			</section>`
    : ""
}

${
  report.sucesso.includes("Infocrim")
    ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados Criminais</h5>
			<hr>
			<!-- PDF -->
			${report.infocrimPathImg
        .map(
          img =>
            `<img style="max-width: 100%; display: block; max-height: 80%;" src="${pathBase +
              img}"></img>`
        )
        .join("")}
		</div>
	</section>`
    : ""
}

${
  report.sucesso.includes("Jucesp")
    ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados de Pessoa Jurídica</h5>
			<hr>
			<div style="margin-bottom: 1rem;">
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome da empresa:</strong>
					${report.nomeDaEmpresa || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Tipo de empresa:</strong>
					${report.tipoDeEmpresa || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Data da constituicao:</strong>
					${report.dataDaConstituicao || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Inicio da atividade:</strong>
					${report.inicioDaAtividade || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>CNPJ:</strong> ${report.cnpj ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Capital:</strong>
					${report.capital || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Logradouro:</strong>
					${report.logradouro || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Bairro:</strong> ${report.bairro ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Municipio:</strong>
					${report.municipio || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Numero:</strong> ${report.numero ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Complemento:</strong>
					${report.complemento || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>CEP:</strong> ${report.cep ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>UF:</strong> ${report.uf ||
          "-"}</span>
				<!-- PDF -->
				${report.jucespPathImg
          .map(
            img =>
              `<img style="max-width: 100%; display: block; max-height: 80%;" src="${pathBase +
                img}"></img>`
          )
          .join("")}
			</div>
		</div>
	</section>`
    : ""
}

${
  report.sucesso.includes("Siel")
    ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados Eleitorais</h5>
			<hr>
			<div style="margin-bottom: 1rem;">
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome:</strong> ${report.nome ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Título:</strong> ${report.titulo ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nascimento:</strong>
					${report.nascimento || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Zona:</strong> ${report.zona ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Endereço:</strong>
					${report.endereco || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Município:</strong>
					${report.municipio || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>UF:</strong> ${report.uf ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Data domicílio:</strong>
					${report.dataDomicilio || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome do pai:</strong>
					${report.nomePai || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome da mãe:</strong>
					${report.nomeMae || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Naturalidade:</strong>
					${report.naturalidade || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Código validação:</strong>
					${report.cdValidacao || "-"}</span>
			</div>
		</div>
	</section>`
    : ""
}

${
  report.sucesso.includes("Sivec")
    ? `<section>
		<div style="padding: 1.5rem;">
			<h5 style="margin-bottom: 0.25rem; font-weight:bold; font-size: 1.25rem;">Dados Judiciais</h5>
			<hr>
			<div style="margin-bottom: 1rem;">
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome:</strong> ${report.nome ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Data de nascimento:</strong>
					${report.dtNscto || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Número VEC:</strong>
					${report.nroVEC || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Sexo:</strong> ${report.sexo ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>RG:</strong> ${report.rg ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Tipo RG:</strong>
					${report.tipoRg || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Data de emissao do RG:</strong>
					${report.dtEmissaoRg || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Estado civil:</strong>
					${report.estadoCivil || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Naturalizado:</strong>
					${report.naturalizado || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Grau instrução:</strong>
					${report.grauInstrucao || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome do pai:</strong>
					${report.nomePai || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Nome da mãe:</strong>
					${report.nomeMae || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Cor da pele:</strong>
					${report.corPele || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Alcunha:</strong>
					${report.alcunha || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Naturalidade:</strong>
					${report.naturalidade || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Posto de identificaçã:o</strong>
					${report.postoIdentificacao || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Fórmula fundamental:</strong>
					${report.formulaFundamental || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Cor dos olhos:</strong>
					${report.corOlhos || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Cabelo:</strong> ${report.cabelo ||
          "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Profissão:</strong>
					${report.profissao || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Endereço residencial:</strong>
					${report.endResidencial || "-"}</span>
				<span style="display: block; margin-bottom: 0.5rem;"><strong>Endereço trabalho:</strong>
					${report.endTrabalho || "-"}</span>
			</div>
		</div>
	</section>
</div>`
    : ""
}
`;
