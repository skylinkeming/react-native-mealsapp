import {View, Text, StyleSheet} from 'react-native'

function MealDetails({ duration, complexity, affordability, style, textStyle }) {
    let mergeViewStyle = [styles.detail, style]
    let mergeTextStyle = [styles.detailItem, textStyle]
    return (
        <View style={mergeViewStyle}>
            <Text style={mergeTextStyle}>{duration}</Text>
            <Text style={mergeTextStyle}>{complexity.toUpperCase()}</Text>
            <Text style={mergeTextStyle}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails;


const styles = StyleSheet.create({
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    }
})

