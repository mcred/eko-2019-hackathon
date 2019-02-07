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
class HtmlController {

  @PostMapping("/")
  fun mask(@RequestBody body: String): String {
    val profile: String = """key: agi5anb;q48vjzt85ijalasi48gnfaap83p98hq1
operations:
  - select:
      name: "request[*].*"
    transform:
      method: name/english/firstOrFull
  - select:
      name: "$..lastName"
    transform:
      method: name/english/last
  - select:
      name: "request[?(@.age > 50)].plan"
    transform:
      method: generate/regex
      options:
        expression: XXX-A
    """

    val json : JsonRecord =  JsonRecord(URLDecoder.decode(body, "UTF-8"))
    var masker = Masker()

    masker.startJob()
    masker.setProfileString(profile)
    masker.process(json)
    return json.toJson(true)
  }

}
