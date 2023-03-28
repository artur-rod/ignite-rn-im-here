import dayjs from "dayjs"
import { useState } from "react"
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native"

import { Participant } from "../../components/Participant"
import { styles } from "./styles"

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")

  function handleParticipantAdd() {
    if (participantName === "") return 
    
    if(participants.includes(participantName)) {
      return Alert.alert("Participant already exists", "Already exists a participant with this name.")
    }

    setParticipants(prevState => [...prevState, participantName])
    setParticipantName("")
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remove", `Are you sure you want to remove ${name}?`, [
      {
        text: "Yes",
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
        style: "destructive"
      },
      {
        text: "No",
        style: "cancel"
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>I'm Here</Text>
      <Text style={styles.eventDate}>{dayjs().format("dddd, MMMM DD, YYYY")}</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Participant Name"
          placeholderTextColor="#fdfcfea1"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name={item} 
              onRemove={() => handleParticipantRemove(item)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nobody here yet?{'\n'}
            Add participants on your presence list!
          </Text>
        )}
      />

    </View>
  )
}