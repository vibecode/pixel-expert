import * as actionTypes from '../constants/actionTypes'
import { GREETING } from '../constants/screenTypes'
import { generateQuest } from '../helpers/helpers'
import screensSchema from '../constants/screensSchema'
import * as firebase from 'firebase'

export const fetchData = () => dispatch => {
  //get images urls from firebase
  const ref = firebase.database().ref()

  ref
    .once('value')
    .then(snapshot => {
      const images = snapshot.val()

      //Generate quests schema
      const quests = new Array(10)
        .fill(null)
        .map(quest => generateQuest(screensSchema, images))

      //collect img urls from generated schema for preloading
      const urls = quests.reduce((acc, quest) => {
        return [...acc, ...quest.answers.map(answer => answer.image.url)]
      }, [])

      //preload all images
      const requests = urls.map(url => {
        return new Promise((resolve, reject) => {
          const image = new Image()
          image.src = url
          image.onload = resolve
          image.onerror = reject
        })
      })

      Promise.all(requests)
        .then(() => {
          dispatch({
            type: actionTypes.FETCH_SUCCESS,
            payload: quests
          })
          setTimeout(() => {
            dispatch({
              type: actionTypes.CHANGE_SCREEN,
              payload: GREETING
            })
          }, 1500)
        })
        .catch(() => {
          dispatch(fetchError())
        })
    })
    .catch(err => {
      dispatch(fetchError())
    })
}

export const fetchError = () => {
  return {
    type: actionTypes.FETCH_ERROR
  }
}
