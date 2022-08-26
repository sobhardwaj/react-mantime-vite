import { TextInput, Checkbox, Button, Group, Box } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

function Connection() {
  const form = useForm({
    initialValues: {
      ConnString: "",
      savedForFuture: false,
    },

    validate: {
      // ConnString: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Box sx={{ maxWidth: 700 }} mx="auto">
      <form
        style={{ width: "480px" }}
        onSubmit={form.onSubmit((values) => console.log(values))}
      >
        <TextInput
          withAsterisk
          label="Connection Name"
          placeholder=""
          {...form.getInputProps("ConnName")}
        />
        <TextInput
          withAsterisk
          label="Server URL"
          placeholder="localhost"
          {...form.getInputProps("ConnString")}
        />
        <TextInput
          withAsterisk
          label="Server Port"
          placeholder="5432"
          {...form.getInputProps("port")}
        />
        <TextInput
          withAsterisk
          label="Database Name"
          placeholder="example-databse"
          {...form.getInputProps("dbName")}
        />
        <TextInput
          withAsterisk
          label="User Name"
          placeholder="username"
          {...form.getInputProps("dbUsername")}
        />
        <TextInput
          withAsterisk
          label="Password"
          placeholder="admin@321"
          {...form.getInputProps("dbPasscode")}
        />
        <Checkbox
          mt="md"
          label="Save Connection"
          {...form.getInputProps("savedForFuture", { type: "checkbox" })}
        />

        <Group position="right" mt="md">
          <Button type="submit">Test</Button>
          <Button type="submit">Connect</Button>
        </Group>
      </form>
    </Box>
  );
}

export default Connection;
