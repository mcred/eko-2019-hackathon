package com.delphix.resumemasking

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.http.*
import org.springframework.web.bind.annotation.*
import com.delphix.playground.masking.Masker
import com.delphix.playground.masking.record.JsonRecord
import java.net.URLDecoder

@RestController
class ResumeController {

  @PostMapping("/resume")
  fun mask(@RequestBody body: String): String {
    val profile: String = """key: agi5anb;q48vjzt85ijalasi48gnfaap83p98hq1
operations:
  - select:
      name: "request[*].0"
    transform:
      method: location/us/city
  - select:
      name: "request[*].2"
    transform:
      method: replace/character
  - select:
      name: "request[*].3"
    transform:
      method: name/english/firstOrFull
  - select:
      name: "request[*].4"
    transform:
      method: replace/character
  - select:
      name: "request[*].5"
    transform:
      method: phone/us
  - select:
      name: "request[*].6"
    transform:
      method: replace/character
  - select:
      name: "request[*].8"
    transform:
      method: replace/character
  - select:
      name: "request[*].9"
    transform:
      method: location/us/city
  - select:
      name: "request[*].15"
    transform:
      method: replace/character
  - select:
      name: "request[*].16"
    transform:
      method: location/us/city
"""

    val json : JsonRecord =  JsonRecord(URLDecoder.decode(body, "UTF-8"))
    var masker = Masker()

    masker.startJob()
    masker.setProfileString(profile)
    masker.process(json)
    return json.toJson(true)
  }

}
