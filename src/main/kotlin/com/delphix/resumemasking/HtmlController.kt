package com.delphix.resumemasking

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.http.*
import org.springframework.web.bind.annotation.*
import com.delphix.playground.masking.Masker
import com.delphix.playground.masking.record.JsonRecord

@RestController
class HtmlController {

  @GetMapping("/")
  fun mask(@RequestBody body: String): String {

    val profile: String = """operations:
  - select:
      name: "records[*].firstName"
    transform:
      method: name/english/first
  - select:
      name: "$..lastName"
    transform:
      method: name/english/last
  - select:
      name: "records[?(@.age > 50)].plan"
    transform:
      method: generate/regex
      options:
        expression: XXX-A
  - select:
      name: "records[?(@.age <= 50)].plan"
    transform:
      method: generate/regex
      options:
        expression: YYY-D
    """

    val json : JsonRecord =  JsonRecord(body)
    var masker = Masker()

    masker.startJob()
    masker.setProfileString(profile)
    masker.process(json)
    return json.toJson(true)
  }

}
