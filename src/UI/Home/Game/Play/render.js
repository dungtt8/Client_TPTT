import React, { Component } from 'react'
import { 
    Text, View, Image, ImageBackground, TouchableOpacity
 } from 'react-native'
 import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { styles } from './style';
import Modal from 'react-native-modal';
import HeaderComponent from '../../../../Util/Component Util/HeaderComponent';

export const RenderPlayGame = ({
    onGoProfile = () => {},

    sourceA = '',
    sourceB = '',
    sourceC = '',
    overTime = () => {},
    onPressA = () => {},
    onPressB = () => {},
    onPressC = () => {},
    setRefProgress = () => {},
    
    GameOverModalVisible = false,
    hideGameOverModal = () => {},
    showGameOverModal = () => {},
    GameOver = () => {},

    question = '',
    answerA = '',
    answerB = ''
}) => {
    
    return (
        <ImageBackground
            source={require('../../../../../Media/background.png')}
            style = {styles.container}>
            
            <HeaderComponent
                onGoProfile = {() => onGoProfile()}
            />

            <View style = {styles.infoHeader}>
                <View style = {styles.leftContainer}>
                    <Image
                        source = {require('../../../../../Media/Game/multiple-users.png')}
                        style = {styles.infoHeaderIcon}
                        resizeMode = 'center'
                    />
                    <Text style = {styles.titleScoreHeader}>123</Text>
                </View>

                <View style = {styles.rightContainer}>
                    <Image
                        source={require('../../../../../Media/Game/Dinamon.png')}
                        style = {styles.infoHeaderIcon}
                        resizeMode = "center"
                    />
                    <Text style = {styles.titleScoreHeader}>Điểm tích lũy</Text>
                </View>
            </View>
            <View style = {styles.score}>
            {/* State Score game */}
                <Text style={styles.textScore}>150.000</Text>
            </View>

            <View style = {styles.bodyContainer}>
            {/* Set state question */}
                <Text style = {styles.countQuestion}>Câu hỏi 1</Text>

                <ImageBackground
                    source = {require('../../../../../Media/Game/QuestionBG.png')}
                    style = {styles.questionContainer}
                    resizeMode = 'center'>
                    {/* Set state Question */}
                    <Text style={styles.textQuestion}>{question}</Text>
                </ImageBackground>

                <View style = {styles.countDown}>
                    <AnimatedCircularProgress
                        ref={setRefProgress}
                        size={80}
                        width={5}
                        fill={100}
                        tintColor="#3d5875"
                        backgroundColor="#B2FF2A"
                        rotation={360}
                        >
                        {
                            (fill) => {
                                var num  = Math.floor(fill*0.15)
                                if (num === 15) {
                                    {overTime()}}
                                return(
                                    <Text style={styles.points}>
                                        {15-num}
                                    </Text>
                            )}
                        }
                    </AnimatedCircularProgress>
                </View>

                <TouchableOpacity
                    onPress={() => onPressA()}>
                    <ImageBackground
                        source  = {sourceA}
                        style = {styles.answerStyle}
                        resizeMode = 'center'>
                        <Text style = {styles.ABCStyle}>A</Text>
                        <View style = {styles.textAnswerContainer}>
                            <Text style={styles.textAnswer}>{answerA}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onPressB()}>
                    <ImageBackground
                        source  = {sourceB}
                        style = {styles.answerStyle}
                        resizeMode = 'center'>
                        <Text style = {styles.ABCStyle}>B</Text>
                        <View style = {styles.textAnswerContainer}>
                            <Text style={styles.textAnswer}>{answerB}</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => onPressC()}>
                    <ImageBackground
                        source  = {sourceC}
                        style = {styles.answerStyle}
                        resizeMode = 'center'>
                        <Text style = {styles.ABCStyle}>C</Text>
                        <View style = {styles.textAnswerContainer}>
                            <Text style={styles.textAnswer}>Dừng cuộc chơi</Text>
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            
            <Modal
                isVisible = {GameOverModalVisible}
                onBackdropPress = {hideGameOverModal}
                style = {styles.ModalGameOverContainer}>
                <View style = {{flex:1}}>
                        <Text style = {styles.textTitleModalGO}>Bạn đã trả lời sai</Text>
                </View>

                <View style = {{flex:1}}>
                    <Text style = {styles.textTitleModalGO}>VÒNG CHƠI KẾT THÚC</Text>
                </View>

                <View style = {{flex:2}}>
                    <Text style = {styles.scoreDes}>Điểm tích lũy</Text>
                    <Text style = {styles.scoreValue}>15.500</Text>    
                </View>

                <View style = {{flex:1}}>
                        <TouchableOpacity 
                            style = {styles.confirmBtn}
                            onPress = {() => GameOver()}>
                            <Text style = {styles.textConfirmBtn}>XÁC NHẬN</Text>
                        </TouchableOpacity>
                </View>
            </Modal>

        </ImageBackground>
    )
}