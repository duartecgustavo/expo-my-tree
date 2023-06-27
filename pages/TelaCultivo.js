import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Chat from '../Chat';

export default function TelaCultivo() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <View style={styles.body}>
                    <View style={styles.bodyTexts}>
                        <Text style={styles.heading}>TECNICAS DE CULTIVO</Text>
                        <Text style={styles.subheading}>Um novo jeito de pensar sobre O meio ambiente e a agricultura.</Text>
                        <Image source={require('../assets/imagem_home.png')} style={styles.imgbody} />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyTexts}>
                        <Text style={styles.heading}>Dicas de Jardinagem</Text>
                        <Text style={styles.subheading}>A jardinagem é uma atividade gratificante que nos permite conectar com a natureza e criar espaços verdes encantadores. Ao cultivar um jardim, podemos transformar áreas vazias em refúgios repletos de vida e beleza. Além disso, a jardinagem é uma ótima forma de exercício físico e mental, proporcionando um momento de relaxamento e satisfação.</Text>
                        <Text style={styles.subheading}>Ao embarcar na jornada da jardinagem, é importante aprender sobre as diferentes necessidades das plantas, como a quantidade de luz solar, a rega adequada e o tipo de solo. Cada planta tem suas particularidades, e entender suas exigências nos ajuda a fornecer o ambiente ideal para o seu crescimento saudável.</Text>
                        <Text style={styles.subheading}>Além disso, a jardinagem nos permite explorar nossa criatividade e expressão artística. Podemos escolher entre uma ampla variedade de flores, arbustos e árvores para criar combinações de cores e texturas deslumbrantes. O cuidado diário com as plantas, o plantio de novas mudas e o acompanhamento do crescimento nos proporcionam uma sensação de realização e orgulho.</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyTexts}>
                        <Text style={styles.heading}>Cultive Verduras</Text>
                        <Text style={styles.subheading}>As verduras desempenham um papel essencial em uma dieta saudável e equilibrada. Elas são ricas em vitaminas, minerais e fibras, contribuindo para a nossa saúde e bem-estar. Uma maneira maravilhosa de incorporar verduras frescas em nossa alimentação é cultivá-las em nossa própria horta.</Text>
                        <Text style={styles.subheading}>Ter uma horta em casa nos permite desfrutar de verduras colhidas no auge da frescura e sabor. Além disso, cultivar nossas próprias verduras nos conecta diretamente com o processo de cultivo, desde a semeadura até a colheita. Podemos escolher entre uma variedade de verduras, como alface, espinafre, rúcula e couve, e adaptar nosso cultivo de acordo com a estação do ano e as condições climáticas locais.</Text>
                        <Text style={styles.subheading}>Ao cultivar verduras em casa, também temos a vantagem de saber exatamente quais produtos químicos foram utilizados no processo de crescimento. Podemos optar por práticas de cultivo orgânicas, evitando pesticidas e fertilizantes químicos, o que torna nossas verduras ainda mais saudáveis e seguras para o consumo.</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyTexts}>
                        <Text style={styles.heading}>Cultivo em locais aridos</Text>
                        <Text style={styles.subheading}>O cultivo em locais áridos apresenta desafios únicos, mas com as técnicas corretas, é possível criar e manter um jardim exuberante mesmo em áreas com pouca disponibilidade de água. A escassez de chuva e a alta evaporação podem dificultar o cultivo de plantas, mas há estratégias eficazes para enfrentar essas condições adversas.</Text>
                        <Text style={styles.subheading}>Uma das chaves para o sucesso do cultivo em locais áridos é a escolha de plantas adaptadas à seca. Existem muitas espécies de plantas que possuem características especiais para sobreviver em ambientes com pouca água. Elas desenvolveram mecanismos de armazenamento de água, folhas resistentes à evaporação e raízes capazes de buscar água em profundidades maiores. Essas plantas nativas são ideais para criar um jardim sustentável em regiões áridas.</Text>
                        <Text style={styles.subheading}>Outra técnica valiosa é o uso eficiente da água disponível. A irrigação por gotejamento, por exemplo, é uma técnica que permite fornecer água diretamente às raízes das plantas, minimizando a perda por evaporação. A cobertura do solo com materiais orgânicos, como a palha, também ajuda a reter a umidade e reduzir a evaporação, mantendo o solo fresco e úmido por mais tempo.</Text>
                        <Text style={styles.subheading}>Com planejamento adequado, escolha de plantas adaptadas e técnicas de conservação de água, é possível criar um jardim deslumbrante mesmo em regiões áridas. A beleza das plantas e a resiliência da natureza são evidenciadas quando vemos um jardim florescer mesmo em condições aparentemente adversas.</Text>
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.bodyTexts}>
                        <Text style={styles.heading}>Adubagem</Text>
                        <Text style={styles.subheading}>A adubagem é um aspecto fundamental do cultivo de plantas saudáveis e vibrantes. Os nutrientes fornecidos pelo adubo são essenciais para o crescimento, desenvolvimento e resistência das plantas. Ao adicionar adubo ao solo, estamos fornecendo às plantas os elementos químicos de que elas precisam para realizar processos vitais, como a fotossíntese, a produção de flores e frutos, e a defesa contra doenças.</Text>
                        <Text style={styles.subheading}>Existem diferentes tipos de adubos disponíveis, incluindo adubos orgânicos e adubos sintéticos. Os adubos orgânicos, como o composto e o esterco, são feitos de materiais naturais e fornecem nutrientes gradualmente ao longo do tempo. Eles também melhoram a estrutura do solo, aumentando sua capacidade de retenção de água e nutrientes. Já os adubos sintéticos são formulados quimicamente e geralmente fornecem nutrientes imediatamente às plantas.</Text>
                        <Text style={styles.subheading}>Para uma adubação eficiente, é importante conhecer as necessidades nutricionais das plantas que estamos cultivando. Cada espécie tem exigências específicas de nutrientes, e o excesso ou a falta de determinados nutrientes pode prejudicar seu crescimento. Além disso, devemos ter cuidado para não aplicar adubo em excesso, o que pode causar a queima das raízes ou a poluição do meio ambiente.</Text>
                    </View>
                </View>
                <Chat />
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 24,
        textAlign: 'justify'
    },
    scrollView: {
        flex: 1,
        width: '100%',
    },
    body: {
        width: '100%',
        backgroundColor: '#BBEAFB',
        alignItems: 'center',
        padding: '10%',
    },
    bodyTexts: {
        width: '100%',
        alignItems: 'flex-start',
        gap: '30px'
    },
    imgbody: {
        width: 300,
        height: 300,
        marginTop: "20px"
    },
})
