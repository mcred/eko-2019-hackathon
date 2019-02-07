package com.delphix.resumemasking

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.ui.set
import org.springframework.http.*
import org.springframework.web.bind.annotation.*

@RestController
class HtmlController {

  @GetMapping("/")
  fun mask(@RequestBody body: String): String {
    return "mask"
  }

}
